const countryCoordinates = [
    { name: "Afghanistan", coordinates: [67.709953, 33.93911] },
    { name: "Albania", coordinates: [20.168331, 41.153332] },
    { name: "Algeria", coordinates: [1.659626, 28.033886] },
    { name: "Andorra", coordinates: [1.601554, 42.546245] },
    { name: "Angola", coordinates: [17.873887, -11.202692] },
    { name: "Antigua and Barbuda", coordinates: [-61.796428, 17.060816] },
    { name: "Argentina", coordinates: [-63.616672, -38.416097] },
    { name: "Armenia", coordinates: [45.038189, 40.069099] },
    { name: "Australia", coordinates: [133.775136, -25.274398] },
    { name: "Austria", coordinates: [14.550072, 47.516231] },
    { name: "Azerbaijan", coordinates: [47.576927, 40.143105] },
    { name: "Bahamas", coordinates: [-77.39628, 25.03428] },
    { name: "Bahrain", coordinates: [50.637772, 25.930414] },
    { name: "Bangladesh", coordinates: [90.356331, 23.684994] },
    { name: "Barbados", coordinates: [-59.543198, 13.193887] },
    { name: "Belarus", coordinates: [27.953389, 53.709849] },
    { name: "Belgium", coordinates: [4.469936, 50.503887] },
    { name: "Belize", coordinates: [-88.49765, 17.189877] },
    { name: "Benin", coordinates: [2.315834, 9.30769] },
    { name: "Bhutan", coordinates: [90.433601, 27.514162] },
    { name: "Bolivia", coordinates: [-63.588653, -16.290154] },
    { name: "Bosnia and Herzegovina", coordinates: [17.679076, 43.915886] },
    { name: "Botswana", coordinates: [24.684866, -22.328474] },
    { name: "Brazil", coordinates: [-51.92528, -14.235004] },
    { name: "Brunei", coordinates: [114.727669, 4.535277] },
    { name: "Bulgaria", coordinates: [25.48583, 42.733883] },
    { name: "Burkina Faso", coordinates: [-1.561593, 12.238333] },
    { name: "Burundi", coordinates: [29.918886, -3.373056] },
    { name: "Cambodia", coordinates: [104.990963, 12.565679] },
    { name: "Cameroon", coordinates: [12.354722, 7.369722] },
    { name: "Canada", coordinates: [-98.0, 56.0] },
    { name: "Cape Verde", coordinates: [-24.013197, 16.002082] },
    { name: "Central African Republic", coordinates: [20.939444, 6.611111] },
    { name: "Chad", coordinates: [19.0, 15.0] },
    { name: "Chile", coordinates: [-71.542969, -35.675147] },
    { name: "China", coordinates: [104.195397, 35.86166] },
    { name: "Colombia", coordinates: [-74.297333, 4.570868] },
    { name: "Comoros", coordinates: [43.872219, -11.875001] },
    { name: "Congo (Brazzaville)", coordinates: [15.827659, -0.228021] },
    { name: "Congo (Kinshasa)", coordinates: [21.758664, -4.038333] },
    { name: "Costa Rica", coordinates: [-83.753428, 9.748917] },
    { name: "Croatia", coordinates: [15.2, 45.1] },
    { name: "Cuba", coordinates: [-77.781167, 21.521757] },
    { name: "Cyprus", coordinates: [33.429859, 35.126413] },
    { name: "Czechia", coordinates: [15.472962, 49.817492] },
    { name: "Denmark", coordinates: [9.501785, 56.26392] },
    { name: "Djibouti", coordinates: [42.590275, 11.825138] },
    { name: "Dominica", coordinates: [-61.370976, 15.414999] },
    { name: "Dominican Republic", coordinates: [-70.162651, 18.735693] },
    { name: "Ecuador", coordinates: [-78.183406, -1.831239] },
    { name: "Egypt", coordinates: [30.802498, 26.820553] },
    { name: "El Salvador", coordinates: [-88.89653, 13.794185] },
    { name: "Equatorial Guinea", coordinates: [10.267895, 1.650801] },
    { name: "Eritrea", coordinates: [39.782334, 15.179384] },
    { name: "Estonia", coordinates: [25.013607, 58.595272] },
    { name: "Eswatini", coordinates: [31.465866, -26.522503] },
    { name: "Ethiopia", coordinates: [40.489673, 9.145] },
    { name: "Fiji", coordinates: [179.414413, -16.578193] },
    { name: "Finland", coordinates: [25.748151, 61.92411] },
    { name: "France", coordinates: [2.213749, 46.227638] },
    { name: "Gabon", coordinates: [11.609444, -0.803689] },
    { name: "Gambia", coordinates: [-15.310139, 13.443182] },
    { name: "Georgia", coordinates: [43.356892, 42.315407] },
    { name: "Germany", coordinates: [10.451526, 51.165691] },
    { name: "Ghana", coordinates: [-1.023194, 7.946527] },
    { name: "Greece", coordinates: [21.824312, 39.074208] },
    { name: "Grenada", coordinates: [-61.604171, 12.262776] },
    { name: "Guatemala", coordinates: [-90.230759, 15.783471] },
    { name: "Guinea", coordinates: [-9.696645, 9.945587] },
    { name: "Guinea-Bissau", coordinates: [-15.180413, 11.803749] },
    { name: "Guyana", coordinates: [-58.93018, 4.860416] },
    { name: "Haiti", coordinates: [-72.285215, 18.971187] },
    { name: "Honduras", coordinates: [-86.241905, 15.199999] },
    { name: "Hungary", coordinates: [19.503304, 47.162494] },
    { name: "Iceland", coordinates: [-19.020835, 64.963051] },
    { name: "India", coordinates: [78.96288, 20.593684] },
    { name: "Indonesia", coordinates: [113.921327, -0.789275] },
    { name: "Iran", coordinates: [53.688046, 32.427908] },
    { name: "Iraq", coordinates: [43.679291, 33.223191] },
    { name: "Ireland", coordinates: [-8.24389, 53.41291] },
    { name: "Israel", coordinates: [34.851612, 31.046051] },
    { name: "Italy", coordinates: [12.56738, 41.87194] },
    { name: "Jamaica", coordinates: [-77.297508, 18.109581] },
    { name: "Japan", coordinates: [138.252924, 36.204824] },
    { name: "Jordan", coordinates: [36.238414, 30.585164] },
    { name: "Kazakhstan", coordinates: [66.923684, 48.019573] },
    { name: "Kenya", coordinates: [37.906193, -0.023559] },
    { name: "Kiribati", coordinates: [-168.734039, -3.370417] },
    { name: "Kuwait", coordinates: [47.481766, 29.31166] },
    { name: "Kyrgyzstan", coordinates: [74.766098, 41.20438] },
    { name: "Laos", coordinates: [102.495408, 19.85627] },
    { name: "Latvia", coordinates: [24.603189, 56.879635] },
    { name: "Lebanon", coordinates: [35.86785, 33.893791] },
    { name: "Lesotho", coordinates: [28.233608, -29.609988] },
    { name: "Liberia", coordinates: [-9.429499, 6.428055] },
    { name: "Libya", coordinates: [17.228331, 26.3351] },
    { name: "Liechtenstein", coordinates: [9.555373, 47.166000] },
    { name: "Lithuania", coordinates: [23.881275, 55.169438] },
    { name: "Luxembourg", coordinates: [6.129583, 49.815273] },
    { name: "Madagascar", coordinates: [46.869107, -19.348404] },
    { name: "Malawi", coordinates: [34.301525, -13.254308] },
    { name: "Malaysia", coordinates: [101.975766, 4.210325] },
    { name: "Maldives", coordinates: [73.0753, 3.2028] },
    { name: "Mali", coordinates: [-3.996166, 17.570692] },
    { name: "Malta", coordinates: [14.5001, 35.9375] },
    { name: "Marshall Islands", coordinates: [168.7375, 7.1106] },
    { name: "Mauritania", coordinates: [-11.408082, 21.00789] },
    { name: "Mauritius", coordinates: [57.584472, -20.348404] },
    { name: "Mexico", coordinates: [-102.552784, 23.634501] },
    { name: "Micronesia", coordinates: [150.550812, 7.425554] },
    { name: "Moldova", coordinates: [28.369885, 47.411622] },
    { name: "Monaco", coordinates: [7.412841, 43.738413] },
    { name: "Mongolia", coordinates: [103.846692, 46.862496] },
    { name: "Montenegro", coordinates: [19.37439, 42.708678] },
    { name: "Morocco", coordinates: [-7.09262, 31.791702] },
    { name: "Mozambique", coordinates: [35.529562, -18.665695] },
    { name: "Myanmar (Burma)", coordinates: [95.955974, 21.913965] },
    { name: "Namibia", coordinates: [17.083525, -22.95764] },
    { name: "Nauru", coordinates: [166.916667, -0.5] },
    { name: "Nepal", coordinates: [83.98456, 28.394857] },
    { name: "Netherlands", coordinates: [5.291266, 52.132633] },
  { name: "New Zealand", coordinates: [174.885971, -40.900557] },
  { name: "Nicaragua", coordinates: [-85.207229, 12.865416] },
  { name: "Niger", coordinates: [8.080946, 17.611001] },
  { name: "Nigeria", coordinates: [8.675277, 9.081999] },
  { name: "North Macedonia", coordinates: [21.745275, 41.608635] },
  { name: "Norway", coordinates: [8.468946, 60.472024] },
  { name: "Oman", coordinates: [55.923255, 21.512583] },
  { name: "Pakistan", coordinates: [69.345116, 30.375321] },
  { name: "Palau", coordinates: [134.58252, 7.51498] },
  { name: "Panama", coordinates: [-80.782127, 8.537981] },
  { name: "Papua New Guinea", coordinates: [147.150918, -6.314993] },
  { name: "Paraguay", coordinates: [-58.165636, -23.442503] },
  { name: "Peru", coordinates: [-75.015152, -9.189967] },
  { name: "Philippines", coordinates: [121.774017, 12.879721] },
  { name: "Poland", coordinates: [19.398148, 52.237049] },
  { name: "Portugal", coordinates: [-8.224454, 39.399872] },
  { name: "Qatar", coordinates: [51.183889, 25.354826] },
  { name: "Romania", coordinates: [24.96676, 45.943161] },
  { name: "Russia", coordinates: [100.0, 60.0] },
  { name: "Rwanda", coordinates: [29.873888, -1.940278] },
  { name: "Saint Kitts and Nevis", coordinates: [-62.782998, 17.357822] },
  { name: "Saint Lucia", coordinates: [-60.978885, 13.909444] },
  { name: "Saint Vincent and the Grenadines", coordinates: [-61.287228, 12.984305] },
  { name: "Samoa", coordinates: [-172.10463, -13.759029] },
  { name: "San Marino", coordinates: [12.458331, 43.94236] },
  { name: "São Tomé and Príncipe", coordinates: [6.613081, 0.18636] },
  { name: "Saudi Arabia", coordinates: [45.079162, 23.885942] },
  { name: "Senegal", coordinates: [-14.452362, 14.497401] },
  { name: "Serbia", coordinates: [20.46513, 44.016521] },
  { name: "Seychelles", coordinates: [55.491977, -4.679574] },
  { name: "Sierra Leone", coordinates: [-11.779889, 8.460555] },
  { name: "Singapore", coordinates: [103.819836, 1.352083] },
  { name: "Slovakia", coordinates: [19.699024, 48.669026] },
  { name: "Slovenia", coordinates: [14.995463, 46.151241] },
  { name: "Solomon Islands", coordinates: [159.414417, -9.64571] },
  { name: "Somalia", coordinates: [46.199616, 5.152149] },
  { name: "South Africa", coordinates: [22.9375, -30.5595] },
  { name: "South Korea", coordinates: [127.766922, 35.907757] },
  { name: "South Sudan", coordinates: [31.306977, 6.877055] },
  { name: "Spain", coordinates: [-3.70379, 40.463667] },
  { name: "Sri Lanka", coordinates: [80.771797, 7.873054] },
  { name: "Sudan", coordinates: [30.217636, 15.653485] },
  { name: "Suriname", coordinates: [-56.027781, 3.919305] },
  { name: "Sweden", coordinates: [18.6435, 60.128161] },
  { name: "Switzerland", coordinates: [8.227512, 46.818188] },
  { name: "Syria", coordinates: [38.996815, 34.802075] },
  { name: "Taiwan", coordinates: [120.960515, 23.69781] },
  { name: "Tajikistan", coordinates: [71.276093, 38.861035] },
  { name: "Tanzania", coordinates: [34.888822, -6.369028] },
  { name: "Thailand", coordinates: [100.992541, 15.870032] },
  { name: "Timor-Leste", coordinates: [125.727539, -8.874217] },
  { name: "Togo", coordinates: [0.984323, 8.225342] },
  { name: "Tonga", coordinates: [-175.198242, -21.178986] },
  { name: "Trinidad and Tobago", coordinates: [-61.222503, 10.691803] },
  { name: "Tunisia", coordinates: [9.537499, 33.886917] },
  { name: "Turkey", coordinates: [35.243322, 38.963745] },
  { name: "Turkmenistan", coordinates: [59.556278, 38.969719] },
  { name: "Tuvalu", coordinates: [177.6493, -7.1095] },
  { name: "Uganda", coordinates: [32.290275, 1.373056] },
  { name: "Ukraine", coordinates: [31.16558, 48.379433] },
  { name: "United Arab Emirates", coordinates: [53.847818, 23.424076] },
  { name: "United Kingdom", coordinates: [-3.435973, 55.378051] },
  { name: "United States", coordinates: [-95.712891, 37.09024] },
  { name: "Uruguay", coordinates: [-55.765835, -32.522779] },
  { name: "Uzbekistan", coordinates: [64.585262, 41.377491] },
  { name: "Vanuatu", coordinates: [166.959158, -15.376706] },
  { name: "Vatican City", coordinates: [12.453387, 41.902916] },
  { name: "Venezuela", coordinates: [-66.58973, 6.42375] },
  { name: "Vietnam", coordinates: [108.277199, 14.058324] },
  { name: "Yemen", coordinates: [48.516388, 15.552727] },
  { name: "Zambia", coordinates: [27.849332, -13.133809] },
  { name: "Zimbabwe", coordinates: [29.146667, -19.013286] }
]


function getCoordinatesByCountryName(name) {
    const match = countryCoordinates.find(c => c.name === name);
    return match ? match.coordinates : null;
}

export function generateInfo(url) {
    const clicksPerDay = {};
    url.clickInfo.forEach(click => {
        const date = new Date(click.clickdate).toISOString().split('T')[0];
        clicksPerDay[date] = (clicksPerDay[date] || 0) + 1;
    });

    const clickData = Object.entries(clicksPerDay).map(([date, clicks]) => ({
        date,
        clicks
    }));

    const browserCount = {};
    url.clickInfo.forEach(click => {
        browserCount[click.browser] = (browserCount[click.browser] || 0) + 1;
    });

    const browserData = Object.entries(browserCount).map(([name, value]) => ({
        name,
        value
    }));

    const deviceCount = {};
    url.clickInfo.forEach(click => {
        deviceCount[click.device] = (deviceCount[click.device] || 0) + 1;
    });

    const deviceData = Object.entries(deviceCount).map(([name, value]) => ({
        name,
        value
    }));

    const countryCount = {};
    url.clickInfo.forEach(click => {
        countryCount[click.country] = (countryCount[click.country] || 0) + 1;
    });

    const countryData = Object.entries(countryCount).map(([name, value]) => {
        const coordinates = getCoordinatesByCountryName(name);
        return {
            name,
            clicks: value,
            coordinates
        };
    });

    return { clickData, browserData, deviceData, countryData };
}
