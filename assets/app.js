import swal from 'sweetalert';
/*
 * Welcome to your app's main JavaScript file!
 *
 * This file will be included onto the page via the importmap() Twig function,
 * which should already be in your base.html.twig.
 */
setTimeout(() => {
  if (document.location.href.includes('/edit')) {
    swal("Great !", "You are editing an article", "success");
  }
}, 1000);
