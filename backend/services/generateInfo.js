



export function generateInfo(url) {
    const clicksPerDay = {};
    url.clickInfo.forEach(click => {
        const date = new Date(click.clickdate).toISOString().split('T')[0];
        clicksPerDay[date] = (clicksPerDay[date] || 0) + 1;
    });

    const browserCount = {};
    url.clickInfo.forEach(click => {
        browserCount[click.browser] = (browserCount[click.browser] || 0) + 1;
    });

    const deviceCount = {};
    url.clickInfo.forEach(click => {
        deviceCount[click.device] = (deviceCount[click.device] || 0) + 1;
    });


    const countryCount = {};
    url.clickInfo.forEach(click => {
        countryCount[click.country] = (countryCount[click.country] || 0) + 1;
    });


    return { clicksPerDay, browserCount, deviceCount,countryCount }
}