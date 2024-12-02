
## Geolocation based Google SERP generator

A simple script that generates UULE parameter for Google Search and appends it at the end of your search query URL.

UULE is a handy search parameter made by Google Ads to help themselves easily see how their search results vary from location to location. It's pretty useful to us. It looks like this: &uule=w+CAIQICIdTG9uZG9uLEVuZ2xhbmQsVW5pdGVkIEtpbmdkb

When you append this to a search URL like this https://www.google.com/search?q=[search-term]&oq=[search-term], you'll get search results for London, UK. Try this: https://www.google.com/search?q=kittens&oq=kittens&uule=w+CAIQICIdTG9uZG9uLEVuZ2xhbmQsVW5pdGVkIEtpbmdkb20&hl=en&gl=uk

The UULE parameter consists of w+CAIQICI + [string length] + [base-64 encoded location]



Try it here: https://obscurious.xyz/geolocation-serp
