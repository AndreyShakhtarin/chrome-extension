export default class CarGurusAdapter {

    currentUrl = false

    is_hsa = false

    title = 'CarGurus'

    queryParam = 'cargurusUrl'


    is(url) {
        return (url.indexOf('https://www.cargurus.co.uk') !== -1) || (url.indexOf('https://sp.cargurus.co.uk/tr/tp2') !== -1);
    }

    isActive(url) {
        return url.indexOf('https://www.cargurus.co.uk') !== -1;
    }

    setDetails(details) {
        console.log(details)
    }

    getCurrentUrl () {
        return this.currentUrl
    }

    getTitle() {
        return this.title
    }

    getCarSearchUrl() {
        return 'http://carsearch.local/campaigns/create' + '?' + this.queryParam + '=' + encodeURIComponent(this.getCurrentUrl())
    }
}