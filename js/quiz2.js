function checkIt() {
  // Initialize scores
  var bahamas = 0;
  var aruba = 0;
  var bora = 0;
  var hawaii = 0;

  // Get all checkbox elements from form
  var elements = document.getElementsByClassName('answer');

  // Tally results
  for (var e of elements) {

    if (e.checked) {
      if (e.value == 'bahamas') {
        bahamas++;
      }
      else if (e.value == 'aruba') {
        aruba++;
      }
      else if (e.value == 'bora') {
        bora++;
      }
      else if (e.value == 'hawaii') {
        hawaii++;
      }
    }

  }

  // Determine result
  var counts = "Bahamas: " + bahamas + ", " +
               "Aruba: " + aruba  + ", " +
               "Bora Bora: " + bora  + ", " +
               "Hawaii: " + hawaii;

  // What is the highest value?
  var max = Math.max(bahamas, aruba, bora, hawaii);

  // Form a message
  var message;

  if (max == bahamas) {
    title = "Where is Your Dream Vacation?";
    message = "Your dream vacation is to the Bahamas!";
    text = "Your all about trying new things and this trip is the perfect one for you.";
  }
  else if (max == aruba) {
    title = "Where is Your Dream Vacation?";
    message = "Your dream vacation is to Aruba!";
    text = "This is the perfect place for your tropical taste.";
  }
  else if (max == bora) {
    title = "Where is Your Dream Vacation?";
    message = "Your dream vacation is to Bora Bora!";
    text = "Your all about the money and this luxurious, relaxing location is perfect for you.";
  }
  else if (max == hawaii) {
    title = "Where is Your Dream Vacation?";
    message = "Your dream vacation is to Hawaii!";
    text = "Your the adventurous type and this tropical location is perfect for you.";
  }

  // Display result
  document.getElementById('result').innerHTML = message;
  // document.getElementById('result').innerHTML = counts;
}
