export default class AutoTradeAdapter {

    currentUrl = false

    is_hsa = false

    title = 'AutoTrader'

    queryParam = 'autotraderUrl'

    passiveUrl = ''

    is(url) {
        this.is_has = url.indexOf('autotrader.co.uk/car-search') !== -1
        this.is_has ? this.passiveUrl = url : false

        return this.is_has;
    }

    isActive(url) {
        return url.indexOf('autotrader.co.uk') !== -1;
    }

    setDetails(details, url) {
        console.log(details, url)
    }

    getCurrentUrl () {
        return this.currentUrl
    }

    getTitle() {
        return this.title
    }

    getCarSearchUrl() {
        return process.env.APP_URL + '?' + this.queryParam + '=' + encodeURIComponent(this.getCurrentUrl())
    }
}