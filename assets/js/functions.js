$(document).ready(function() {
  
  expand();

  // add lightbox class to all image links
  $("a[href$='.jpg'], a[href$='.png'], a[href$='.gif']").attr("data-lity", "");

  // Bigfoot footnotes
  var bigfoot = $.bigfoot({
    actionOriginalFN: "delete",
    buttonMarkup:
      '<div class="bigfoot-footnote__container">' +
      ' <button href="#" class="bigfoot-footnote__button" rel="footnote"' +
      ' id="{{SUP:data-footnote-backlink-ref}}"' +
      ' data-footnote-number="{{FOOTNOTENUM}}"' +
      ' data-footnote-identifier="{{FOOTNOTEID}}"' +
      ' title="guarda la nota n° {{FOOTNOTENUM}}"' +
      ' data-bigfoot-footnote="{{FOOTNOTECONTENT}}">' +
      ' <span class="visually-hidden">{{FOOTNOTENUM}}</span>' +
      " </button>" +
      "</div>"
  });

  function expand() {
    $('.expander-trigger').click(function(){
      $(this).toggleClass("expander-hidden");
    });
  }

});