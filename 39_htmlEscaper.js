function escapeHTML(text) {
  var replacements = {
    '<': '&lt;',
    '>': '&gt;',
    '&': '&amp;',
    '"': '&quot;'
  };

  return text.replace(/[<>&"]/g, function (char) {
    return replacements[char];
  });
}

var html = '<h1 class="section"><p class="main"></p></h1>';
console.log(html);
console.log(escapeHTML(html));
