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
        answer: "First of all, we haven't sent Save the Dates or invites yet -- we are hoping to get our first communications out by mid-April.</p><p> It is true, though, that there are people we aren't able to invite. We decided early on that, for several reasons, a smaller-format wedding was important to us. It’s definitely not because there aren’t more than 70 people that we love and want as part of our lives and marriage! However, factors like venue size, distance of loved ones from Minnesota, costs, and being able to spend more time with each guest all pointed us towards a smaller guest list. </p><p> If we aren’t able to include you at the wedding itself, we truly hope that we will get a chance in the future to visit and celebrate with you personally. If you’re wanting to see Minneapolis, we have a great guest room and would be delighted to host you sometime. </p><p> Additionally, we hope to include and honor those whom we couldn’t invite, or who are unable to attend, by asking you to send us two precious things: photos of yourself/yourselves to include in a display at the wedding (and that we will put in a book to treasure), and a favorite recipe  handwritten on a 3x5 card for what will be our guest/wedding recipe book. We are hoping to send out proper requests for photos and recipes in May or June, but feel free to reach out to us in advance if you'd like."
      },
      {
        question: "For gifts, are you registered anywhere?",
        answer: "If it would bring you joy to give us a wedding gift, we gratefully invite you to choose something from among your favorite local shops and crafters. Additionally, as we get closer to the wedding date, we will build up registries on Etsy and probably a home/kitchen store or two to provide ideas and options for those who prefer that route! Once we have that information we will post it here."
      },
      {
        question: "I’ll be there! What should I wear?",
        answer: "Our wedding colors are 'OUTER SPACE!!!' -- so if you have any starry, silvery, glittery, or otherwise galactic garments around, this is your excuse to let them shine. Otherwise, we welcome you to arrive wearing whatever makes you feel happy and comfortable. "
      },
      {
        question: "You’re feeding us, right?",
        answer: "As people arrive, we will have little crackers and sparkling beverages around in case anyone wants a nibble before the ceremony. For the post-ceremony celebration, food and drink will be catered by the wonderful France 44.  Expect beautiful veggie and cheese plates and other small-format foods, in addition to wine and beer.  We are not doing a formal meal, but there should be plenty to eat and drink for all."
      },
      {
        question: "Where can I stay?",
        answer: "For those of you traveling from out of town, we recommend staying either at the downtown Holiday Inn Express or in Plymouth (near Ross’ parents). We’ve also seen several good and affordable options on www.airb&b.com and www.vrbo.com, and recommend checking them out. If you’d be interested in sharing a larger short-term rental, do let us know and we’d be more happy to help facilitate for you!"
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
})(jQuery);

//from http://www.sanwebe.com/2014/08/css-html-forms-designs
//auto expand textarea
function adjust_textarea(h) {
    h.style.height = "20px";
    h.style.height = (h.scrollHeight)+"px";
}
