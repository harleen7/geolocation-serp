    function generateUule() {

        
        searchQuery = document.getElementById("query").value;
        loc = document.getElementById("location").value;
        countryName = document.getElementById("country").value;
        
        const table = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_";
        const uuleParameter = table[loc.length] + btoa(loc)

        const countryInfo = {
             "Albania": {code: "AL", domain: "google.com"},
         "Afghanistan": {code: "AF", domain: "google.com"},
         "Algeria": {code: "DZ", domain: "google.com"},
         "AmericanSamoa": {code: "AS", domain: "google.com"},
         "Andorra": {code: "AD", domain: "google.com"},
         "Angola": {code: "AO", domain: "google.com"},
         "Anguilla": {code: "AI", domain: "google.com"},
         "Antarctica": {code: "AQ", domain: "google.com"},
         "Antigua and Barbuda": {code: "AG", domain: "google.com"},
         "Argentina": {code: "AR", domain: "google.com.ar"},
         "Armenia": {code: "AM", domain: "google.com"},
         "Aruba": {code: "AW", domain: "google.com"},
         "Australia": {code: "AU", domain: "google.com.au"},
         "Austria": {code: "AT", domain: "google.at"},
         "Azerbaijan": {code: "AZ", domain: "google.com"},
         "Bahamas": {code: "BS", domain: "google.com"},
         "Bahrain": {code: "BH", domain: "google.com"},
         "Bangladesh": {code: "BD", domain: "google.com"},
         "Barbados": {code: "BB", domain: "google.com"},
         "Belarus": {code: "BY", domain: "google.com"},
         "Belgium": {code: "BE", domain: "google.be"},
         "Belize": {code: "BZ", domain: "google.com"},
         "Benin": {code: "BJ", domain: "google.com"},
         "Bermuda": {code: "BM", domain: "google.com"},
         "Bhutan": {code: "BT", domain: "google.com"},
         "Bolivia": {code: "BO", domain: "google.com"},
         "Bonaire": {code: "BQ", domain: "google.com"},
         "Bosnia and Herzegovina": {code: "BA", domain: "google.com"},
         "Botswana": {code: "BW", domain: "google.com"},
         "BouvetIsland": {code: "BV", domain: "google.com"},
         "Brazil": {code: "BR", domain: "google.com"},
         "BritishIndianOceanTerritory(the)": {code: "IO", domain: "google.com"},
         "BruneiDarussalam": {code: "BN", domain: "google.com"},
         "Bulgaria": {code: "BG", domain: "google.com"},
         "BurkinaFaso": {code: "BF", domain: "google.com"},
         "Burundi": {code: "BI", domain: "google.com"},
         "CaboVerde": {code: "CV", domain: "google.com"},
         "Cambodia": {code: "KH", domain: "google.com"},
         "Cameroon": {code: "CM", domain: "google.com"},
         "Canada": {code: "CA", domain: "google.ca"},
         "Cayman Islands": {code: "KY", domain: "google.com"},
         "Central African Republic": {code: "CF", domain: "google.com"},
         "Chad": {code: "TD", domain: "google.com"},
         "Chile": {code: "CL", domain: "google.cl"},
         "China": {code: "CN", domain: "google.com"},
         "ChristmasIsland": {code: "CX", domain: "google.com"},
         "Cocos(Keeling)Islands(the)": {code: "CC", domain: "google.com"},
         "Colombia": {code: "CO", domain: "google.com.co"},
         "Comoros": {code: "KM", domain: "google.com"},
         "Congo": {code: "CD", domain: "google.com"},
         "Congo(the)": {code: "CG", domain: "google.com"},
         "CookIslands(the)": {code: "CK", domain: "google.com"},
         "CostaRica": {code: "CR", domain: "google.com"},
         "Croatia": {code: "HR", domain: "google.com"},
         "Cuba": {code: "CU", domain: "google.com"},
         "Curaçao": {code: "CW", domain: "google.com"},
         "Cyprus": {code: "CY", domain: "google.com"},
         "Czechia": {code: "CZ", domain: "google.com"},
         "Côted'Ivoire": {code: "CI", domain: "google.com"},
         "Denmark": {code: "DK", domain: "google.dk"},
         "Djibouti": {code: "DJ", domain: "google.com"},
         "Dominica": {code: "DM", domain: "google.com"},
         "Dominican Republic": {code: "DO", domain: "google.com"},
         "Ecuador": {code: "EC", domain: "google.com"},
         "Egypt": {code: "EG", domain: "google.com"},
         "ElSalvador": {code: "SV", domain: "google.com"},
         "Equatorial Guinea": {code: "GQ", domain: "google.com"},
         "Eritrea": {code: "ER", domain: "google.com"},
         "Estonia": {code: "EE", domain: "google.com"},
         "Eswatini": {code: "SZ", domain: "google.com"},
         "Ethiopia": {code: "ET", domain: "google.com"},
         "FalklandIslands(the)[Malvinas]": {code: "FK", domain: "google.com"},
         "FaroeIslands(the)": {code: "FO", domain: "google.com"},
         "Fiji": {code: "FJ", domain: "google.com"},
         "Finland": {code: "FI", domain: "google.com"},
         "France": {code: "FR", domain: "google.fr"},
         "FrenchGuiana": {code: "GF", domain: "google.com"},
         "FrenchPolynesia": {code: "PF", domain: "google.com"},
         "FrenchSouthernTerritories(the)": {code: "TF", domain: "google.com"},
         "Gabon": {code: "GA", domain: "google.com"},
         "Gambia(the)": {code: "GM", domain: "google.com"},
         "Georgia": {code: "GE", domain: "google.com"},
         "Germany": {code: "DE", domain: "google.com"},
         "Ghana": {code: "GH", domain: "google.com"},
         "Gibraltar": {code: "GI", domain: "google.com"},
         "Greece": {code: "GR", domain: "google.com.gr"},
         "Greenland": {code: "GL", domain: "google.com"},
         "Grenada": {code: "GD", domain: "google.com"},
         "Guadeloupe": {code: "GP", domain: "google.com"},
         "Guam": {code: "GU", domain: "google.com"},
         "Guatemala": {code: "GT", domain: "google.com"},
         "Guernsey": {code: "GG", domain: "google.com"},
         "Guinea": {code: "GN", domain: "google.com"},
         "Guinea-Bissau": {code: "GW", domain: "google.com"},
         "Guyana": {code: "GY", domain: "google.com"},
         "Haiti": {code: "HT", domain: "google.com"},
         "HeardIslandandMcDonaldIslands": {code: "HM", domain: "google.com"},
         "HolySee(the)": {code: "VA", domain: "google.com"},
         "Honduras": {code: "HN", domain: "google.com"},
         "HongKong": {code: "HK", domain: "google.com"},
         "Hungary": {code: "HU", domain: "google.com"},
         "Iceland": {code: "IS", domain: "google.com"},
         "India": {code: "IN", domain: "google.co.in"},
         "Indonesia": {code: "ID", domain: "google.com"},
         "Iran(IslamicRepublicof)": {code: "IR", domain: "google.com"},
         "Iraq": {code: "IQ", domain: "google.com"},
         "Ireland": {code: "IE", domain: "google.ie"},
         "IsleofMan": {code: "IM", domain: "google.com"},
         "Israel": {code: "IL", domain: "google.com"},
         "Italy": {code: "IT", domain: "google.com"},
         "Jamaica": {code: "JM", domain: "google.com"},
         "Japan": {code: "JP", domain: "google.co.jp"},
         "Jersey": {code: "JE", domain: "google.com"},
         "Jordan": {code: "JO", domain: "google.com"},
         "Kazakhstan": {code: "KZ", domain: "google.com"},
         "Kenya": {code: "KE", domain: "google.com"},
         "Kiribati": {code: "KI", domain: "google.com"},
         "Korea": {code: "KP", domain: "google.com"},
         "Korea(theRepublicof)": {code: "KR", domain: "google.com"},
         "Kuwait": {code: "KW", domain: "google.com"},
         "Kyrgyzstan": {code: "KG", domain: "google.com"},
         "Latvia": {code: "LV", domain: "google.com"},
         "Lebanon": {code: "LB", domain: "google.com"},
         "Lesotho": {code: "LS", domain: "google.com"},
         "Liberia": {code: "LR", domain: "google.com"},
         "Libya": {code: "LY", domain: "google.com"},
         "Liechtenstein": {code: "LI", domain: "google.com"},
         "Lithuania": {code: "LT", domain: "google.com"},
         "Luxembourg": {code: "LU", domain: "google.com"},
         "Macao": {code: "MO", domain: "google.com"},
         "Madagascar": {code: "MG", domain: "google.com"},
         "Malawi": {code: "MW", domain: "google.com"},
         "Malaysia": {code: "MY", domain: "google.com"},
         "Maldives": {code: "MV", domain: "google.com"},
         "Mali": {code: "ML", domain: "google.com"},
         "Malta": {code: "MT", domain: "google.com"},
         "Marshall Islands(the)": {code: "MH", domain: "google.com"},
         "Martinique": {code: "MQ", domain: "google.com"},
         "Mauritania": {code: "MR", domain: "google.com"},
         "Mauritius": {code: "MU", domain: "google.com"},
         "Mayotte": {code: "YT", domain: "google.com"},
         "Mexico": {code: "MX", domain: "google.com.mx"},
         "Micronesia": {code: "FM", domain: "google.com"},
         "Moldova": {code: "MD", domain: "google.com"},
         "Monaco": {code: "MC", domain: "google.com"},
         "Mongolia": {code: "MN", domain: "google.com"},
         "Montenegro": {code: "ME", domain: "google.com"},
         "Montserrat": {code: "MS", domain: "google.com"},
         "Morocco": {code: "MA", domain: "google.com"},
         "Mozambique": {code: "MZ", domain: "google.com"},
         "Myanmar": {code: "MM", domain: "google.com"},
         "Namibia": {code: "NA", domain: "google.com"},
         "Nauru": {code: "NR", domain: "google.com"},
         "Nepal": {code: "NP", domain: "google.com"},
         "Netherlands": {code: "NL", domain: "google.com"},
         "New Caledonia": {code: "NC", domain: "google.com"},
         "New Zealand": {code: "NZ", domain: "google.com"},
         "Nicaragua": {code: "NI", domain: "google.com"},
         "Niger": {code: "NE", domain: "google.com"},
         "Nigeria": {code: "NG", domain: "google.com"},
         "Niue": {code: "NU", domain: "google.com"},
         "Norfolk Island": {code: "NF", domain: "google.com"},
         "Northern Mariana Islands(the)": {code: "MP", domain: "google.com"},
         "Norway": {code: "NO", domain: "google.com"},
         "Oman": {code: "OM", domain: "google.com"},
         "Pakistan": {code: "PK", domain: "google.com.pk"},
         "Palau": {code: "PW", domain: "google.com"},
         "Palestine": {code: "PS", domain: "google.com"},
         "Panama": {code: "PA", domain: "google.com"},
         "Papua New Guinea": {code: "PG", domain: "google.com"},
         "Paraguay": {code: "PY", domain: "google.com"},
         "Peru": {code: "PE", domain: "google.com"},
         "Philippines": {code: "PH", domain: "google.com"},
         "Pitcairn": {code: "PN", domain: "google.com"},
         "Poland": {code: "PL", domain: "google.pl"},
         "Portugal": {code: "PT", domain: "google.pt"},
         "PuertoRico": {code: "PR", domain: "google.com"},
         "Qatar": {code: "QA", domain: "google.com"},
         "Romania": {code: "RO", domain: "google.com"},
         "Russia": {code: "RU", domain: "google.com"},
         "Rwanda": {code: "RW", domain: "google.com"},
         "Réunion": {code: "RE", domain: "google.com"},
         "SaintBarthélemy": {code: "BL", domain: "google.com"},
         "SaintHelena": {code: "SH", domain: "google.com"},
         "SaintKitts and Nevis": {code: "KN", domain: "google.com"},
         "SaintLucia": {code: "LC", domain: "google.com"},
         "SaintMartin": {code: "MF", domain: "google.com"},
         "Saint Pierre and Miquelon": {code: "PM", domain: "google.com"},
         "Saint Vincent and the Grenadines": {code: "VC", domain: "google.com"},
         "Samoa": {code: "WS", domain: "google.com"},
         "SanMarino": {code: "SM", domain: "google.com"},
         "Sao Tomeand Principe": {code: "ST", domain: "google.com"},
         "Senegal": {code: "SN", domain: "google.com"},
         "SaudiArabia": {code: "SA", domain: "google.com"},
         "Serbia": {code: "RS", domain: "google.com"},
         "Seychelles": {code: "SC", domain: "google.com"},
         "SierraLeone": {code: "SL", domain: "google.com"},
         "Singapore": {code: "SG", domain: "google.com"},
         "Sint Maarten(Dutchpart)": {code: "SX", domain: "google.com"},
         "Slovakia": {code: "SK", domain: "google.com"},
         "Slovenia": {code: "SI", domain: "google.com"},
         "Solomon Islands": {code: "SB", domain: "google.com"},
         "Somalia": {code: "SO", domain: "google.com"},
         "South Africa": {code: "ZA", domain: "google.com"},
         "South Sudan": {code: "SS", domain: "google.com"},
         "Spain": {code: "ES", domain: "google.es"},
         "Sri Lanka": {code: "LK", domain: "google.com"},
         "Sudan": {code: "SD", domain: "google.com"},
         "Suriname": {code: "SR", domain: "google.com"},
         "Svalbardand Jan Mayen": {code: "SJ", domain: "google.com"},
         "Sweden": {code: "SE", domain: "google.com"},
         "Switzerland": {code: "CH", domain: "google.ch"},
         "Syria": {code: "SY", domain: "google.com"},
         "Taiwan": {code: "TW", domain: "google.com.tw"},
         "Tajikistan": {code: "TJ", domain: "google.com"},
         "Tanzania": {code: "TZ", domain: "google.com"},
         "Thailand": {code: "TH", domain: "google.com"},
         "Timor-Leste": {code: "TL", domain: "google.com"},
         "Togo": {code: "TG", domain: "google.com"},
         "Tokelau": {code: "TK", domain: "google.com"},
         "Tonga": {code: "TO", domain: "google.com"},
         "Trinidad and Tobago": {code: "TT", domain: "google.com"},
         "Tunisia": {code: "TN", domain: "google.com"},
         "Turkey": {code: "TR", domain: "google.com.tr"},
         "Turkmenistan": {code: "TM", domain: "google.com"},
         "Turks and Caicos Islands": {code: "TC", domain: "google.com"},
         "Tuvalu": {code: "TV", domain: "google.com"},
         "Uganda": {code: "UG", domain: "google.com"},
         "Ukraine": {code: "UA", domain: "google.com"},
         "United Arab Emirates(the)": {code: "AE", domain: "google.com"},
         "United Kingdom": {code: "GB", domain: "google.com"},
         "United States": {code: "US", domain: "google.com"},
         "Uruguay": {code: "UY", domain: "google.com"},
         "Uzbekistan": {code: "UZ", domain: "google.com"},
         "Vanuatu": {code: "VU", domain: "google.com"},
         "Venezuela": {code: "VE", domain: "google.com"},
         "Vietnam": {code: "VN", domain: "google.com"},
         "Virgin Islands(British)": {code: "VG", domain: "google.com"},
         "Virgin Islands(U.S.)": {code: "VI", domain: "google.com"},
         "Wallisand Futuna": {code: "WF", domain: "google.com"},
         "Western Sahara": {code: "EH", domain: "google.com"},
         "Yemen": {code: "YE", domain: "google.com"},
         "Zambia": {code: "ZM", domain: "google.com"},
         "Zimbabwe": {code: "ZW", domain: "google.com"},
         "Åland Islands": {code: "AX", domain: "google.com"},
            };

        function countryCode(countryName) {
            return countryInfo[countryName].code || "Invalid country name";
        }

        function countryDomain(countryName) {
            return countryInfo[countryName].domain || "Invalid country name";
        }

        var queryURL = "https://www." + countryDomain(countryName) + "/search?q=" + searchQuery + "&uule=w+CAIQICI" + uuleParameter + "&gl=" + countryCode(countryName);
        document.getElementById("uule").innerHTML = queryURL;
        window.open(queryURL,'_blank');
        return queryURL;    
    }
