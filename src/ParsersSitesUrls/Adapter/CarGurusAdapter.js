const env = import.meta.env;

export default class CarGurusAdapter {

    currentUrl = false

    is_hsa = false

    title = 'CarGurus'

    queryParam = 'cargurusUrl'

    siteUrl = 'https://www.cargurus.co.uk/Cars/inventorylisting/viewDetailsFilterViewInventoryListing.action'

    isLoading = false

    getTitle() {
        return this.title
    }

    is(url) {
        this.is_has = (url.indexOf('cargurus.co.uk') !== -1 || url.indexOf('https://sp.cargurus.co.uk/tr/tp2') !== -1);
        if (url.indexOf('cargurus.co.uk') !== -1) {
            this.is_has ? this.currentUrl = url : false
        }

        return this.is_has;
    }

    isActive(url) {
        return url.indexOf('https://www.cargurus.co.uk') !== -1 ;
    }

    setDetails(details) {
        details && details.url && details.url.indexOf('https://www.cargurus.co.uk/Cars/searchPreflight.action') !== -1 ? this.parseDetails(details) : false
    }

    parseDetails(details) {
        console.log('Parse detail CarGurus: ',details)
        let originalUrl = new URL(details.url)
        let query = originalUrl.search
        this.currentUrl = this.siteUrl + query
    }

    getCurrentUrl () {
        return this.currentUrl
    }

    getCarSearchUrl() {
        return process.env.APP_URL + '?' + this.queryParam + '=' + encodeURIComponent(this.getCurrentUrl())
    }
}