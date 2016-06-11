(function($) {
    "use strict";

    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 60
    });

    $('#topNav').affix({
        offset: {
            top: 200
        }
    });

    new WOW().init();

    $('a.page-scroll').bind('click', function(event) {
        var $ele = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($ele.attr('href')).offset().top - 60)
        }, 1450, 'easeInOutExpo');
        event.preventDefault();
    });

    $('.navbar-collapse ul li a').click(function() {
        /* always close responsive nav after click */
        $('.navbar-toggle:visible').click();
    });

    $('#galleryModal').on('show.bs.modal', function (e) {
       $('#galleryImage').attr("src",$(e.relatedTarget).data("src"));
    });

    //FAQ addition from Michelle Funk
    var faq = [
      {
        question: "Why didn’t I receive a save the date/invitation?",
        answer: "First of all, we haven't sent Save the Dates or invites yet -- we are hoping to get our first communications out by mid-April (staggered, mostly email but some will get print mail).</p><p> It is true, though, that there are people we aren't able to invite. We decided early on that a smaller-format wedding was important to us. It’s definitely not because there aren’t more than 70 people that we love and want as part of our lives and marriage! However, factors like venue size, distance of loved ones from Minnesota, costs, and being able to spend more time with each guest all pointed us towards a smaller guest list. </p><p> If we aren’t able to include you at the wedding itself, we truly hope that we will get a chance in the future to visit and celebrate with you personally. If you’re wanting to see Minneapolis, we have a great guest room and would be delighted to host you sometime. </p><p> Additionally, we hope to include and honor those whom we couldn’t invite, or who are unable to attend, by asking you to send us two precious things: photos of yourself/yourselves to include in a display at the wedding (and that we will put in a book to treasure), and a favorite recipe  handwritten on a 3x5 card for what will be our guest/wedding recipe book. We are hoping to send out proper requests for photos and recipes in May or June, but feel free to reach out to us in advance if you'd like."
      },
      {
        question: "For gifts, are you registered anywhere?",
        answer: "If it would bring you joy to give us a wedding gift, we gratefully invite you to choose something from among your favorite local shops and crafters, or if you prefer gift registries, see below for ideas:<p><h4><ul><li><a href='https://www.amazon.com/wedding/michelle-c-funk-ross-conklin-minneapolis-october-2016/registry/18WKDHOICP3YT'>Amazon.com Universal Registry</a>:&nbsp;Amazon lets us register anything we can find on the web, so this includes a number of suggestions for local businesses and non-stuff gift ideas.</li><li><a href='http://www.etsy.com/registry/ODE2MTY4OXw4MzM5MTE0/'>Etsy.com</a>:&nbsp; Local crafters from around the world sell their goods on Etsy! Mostly kitchen, home & garden pieces on this list.</li><li><a href='https://www.amazon.com/wedding/michelle-c-funk-ross-conklin-minneapolis-october-2016/registry/18WKDHOICP3YT'>Target</a>:&nbsp;There are a number of wonderful practical things here we could really use.</li></ul></h4>"
      },
      {
        question: "I’ll be there! What should I wear?",
        answer: "Our wedding colors are 'OUTER SPACE!!!' -- so if you have any starry, silvery, glittery, or otherwise galactic garments around, this is your excuse to let them shine. Otherwise, we welcome you to arrive wearing whatever makes you feel happy and comfortable. "
      },
      {
        question: "You’re feeding us, right?",
        answer: "Yes! We know this is a mealtime event and will be providing food accordingly. As people arrive, we will have little crackers and sparkling beverages around in case anyone wants a nibble before the ceremony. For the post-ceremony celebration, food and drink will be catered by the wonderful France 44. Expect a broad spread of veggies, fruits, fine cheeses, small sandwiches, and other portable foods -- in addition to wine and beer."
      },
      {
        question: "Where can I stay?",
        answer: "For those of you traveling from out of town, we recommend staying either at the <a href='http://www.ihg.com/holidayinnexpress/hotels/us/en/minneapolis/mspdt/hoteldetail'>downtown Holiday Inn Express</a> or <a href='https://www.google.com/maps/search/hotels/@44.9946353,-93.5681971,12z'>in Plymouth (near Ross’ parents)</a>. We’ve also seen several good and affordable options on <a href='https://www.airbnb.com/s/Calhoun-Isles--Minneapolis--MN--United-States?guests=2&checkin=10%2F07%2F2016&checkout=10%2F08%2F2016&ss_id=lldtsr79&source=bb&s_tag=zuWpLj1n'>AirBnB</a> and <a href='https://www.vrbo.com/vacation-rentals?q=Calhoun+Isles%2c+Minneapolis%2c+MN%2c+USA&sleeps=2-plus&from-date=2016-10-07&to-date=2016-10-08'>VRBO</a>, and recommend checking them out (use these links to search specifically for our location and dates)! If you’d be interested in sharing a larger short-term rental, do let us know and we’d be more happy to help facilitate for you!"
      },
      {
        question: "If we’re all out of the Bakken by 9 … what then? ",
        answer: "Lake Mde Maka Ska is a beautiful urban park that also has restaurants and coffee shops nearby! We’ll make sure everyone has details, but (weather and energy levels providing) we’ll probably designate a place or places for continuing the celebration. If we’re extra lucky it’ll be nice out and we can enjoy the park."
      },
      {
        question: "What are you guys doing about names?",
        answer: "After the wedding, Michelle won’t be offended if you call her Ms. Conklin -- and for that matter, Ross wouldn’t mind being called Mr. Funk from time to time. But ultimately, after 30+ years with our names we are pretty fond of them, so we won’t be changing them. Whatever our names, we are thrilled to become part of each other’s families."
      },
      {
        question: "Where will you guys live?",
        answer: "In case you didn’t know, we’ve been happily co-habitating with our cat Bandersnatch in Minneapolis for a few years now. We plan on staying put for a while!"
      },
      {
        question: "Are you honeymooning?",
        answer: "Yes, yes, yes! We will be heading out to Oregon (Michelle’s adopted home state) to enjoy Portland, relax on the coast, and let Ross FINALLY experience American Dream Pizza, cookies, Ninkasi beer, co-ops, cocktails, and the wonderful Oregonian people she’s been yammering about for so long."
      }
    ];

    for (var i=0; i<faq.length; i++){
      console.log("for loop entered" )
      $('#accordion').append(
        '<div class="panel panel-default"><div class="panel-heading dkbluebg">' +
        '<h4 class="panel-title">' +
        '<a class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapse'+i+'">' +
        '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + faq[i]["question"] + '</a></h4></div>' +
        '<div id="collapse'+i+'" class="panel-collapse collapse">' +
        '<div class="panel-body"><p>' + faq[i]["answer"] + ' </p></div></div></div>'
      );
    }
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||
    function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();
    a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;
    m.parentNode.insertBefore(a,m)})
    (window,document,'script','https://www.google-analytics.com/analytics.js','ga');
    ga('create', 'UA-72472893-2', 'auto');
    ga('send', 'pageview');

})(jQuery);

//from http://www.sanwebe.com/2014/08/css-html-forms-designs
//auto expand textarea
function adjust_textarea(h) {
    h.style.height = "20px";
    h.style.height = (h.scrollHeight)+"px";
}
