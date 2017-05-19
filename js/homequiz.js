function checkIt() {
  // Initialize scores
  var mansion = 0;
  var condo = 0;
  var town = 0;
  var cottage = 0;

  // Get all checkbox elements from form
  var elements = document.getElementsByClassName('answer');

  // Tally results
  for (var e of elements) {

    if (e.checked) {
      if (e.value == 'mansion') {
        mansion++;
      }
      else if (e.value == 'condo') {
        condo++;
      }
      else if (e.value == 'town') {
        town++;
      }
      else if (e.value == 'cottage') {
        cottage++;
      }
    }

  }

  // Determine result
  var counts = "Mansion: " + mansion + ", " +
               "Condo: " + condo  + ", " +
               "Town Home: " + town  + ", " +
               "Cottage: " + cottage;

  // What is the highest value?
  var max = Math.max(mansion, condo, town, cottage);

  // Form a message
  var message;

  if (max == mansion) {
    title = "What Home Is Meant For You?";
    message = "Your Dream Home is a Mansion!";
    text = "You want all lifes luxuries and have a very expensive taste and this home is perfect for you.";
    resultimage = "<img src='img/mansion.jpg'>";
  }
  else if (max == condo) {
    title = "What Home Is Meant For You?";
    message = "Your Dream Home is a Condo!";
    text = "This small, but nice home is perfect for your minimalist taste.";
    resultimage = "<img src='img/condo.jpg'>";
  }
  else if (max == town) {
    title = "What Home Is Meant For You?";
    message = "Your Dream Home is a Town House!";
    text = "This cozy little home is perfect for you.";
    resultimage = "<img src='img/town.jpg'>";
  }
  else if (max == cottage) {
    title = "What Home Is Meant For You?";
    message = "Your Dream Home is a Cottage!";
    text = "Your the adventurous type would love this home.";
    resultimage = "<img src='img/cottage.jpg'>";
  }

  // Display result
  document.getElementById('result-title').innerHTML = title;
  document.getElementById('result-heading').innerHTML = message;
  document.getElementById('result-text').innerHTML = text;
  document.getElementById('result-image').innerHTML = resultimage;
  // document.getElementById('result').innerHTML = counts;
}
