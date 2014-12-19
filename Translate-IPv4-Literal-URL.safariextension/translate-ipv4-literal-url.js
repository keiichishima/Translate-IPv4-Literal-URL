var IPv4LiteralURLRegexp = /((?:http|https):\/\/)(\d+\.\d+\.\d+\.\d+)((?:$|\/.*))/;

var extractIPv4LiteralURL = function(url) {
    var parts = url.match(IPv4LiteralURLRegexp);
    return parts;
}

var translateIPv4LiteralURL = function(event) {
    if (event.url == null) {
	return;
    }
    var parts = extractIPv4LiteralURL(event.url);
    if (parts == null) {
	return;
    }
    var ipv4LiteralDomain = safari.extension.settings.ipv4LiteralDomain;
    newURL = parts[1] + parts[2] + ipv4LiteralDomain + parts[3];
    event.target.url = newURL;
}

safari.application.addEventListener("beforeNavigate",
				    translateIPv4LiteralURL,
				    true);
