const env = import.meta.env;

export default class CarGurusAdapter {

    currentUrl = false

    is_hsa = false

    title = 'CarGurus'

    queryParam = 'cargurusUrl'

    is(url) {
        this.is_has = (url.indexOf('cargurus.co.uk') !== -1) || (url.indexOf('sp.cargurus.co.uk/tr/tp2') !== -1);
        this.is_has ? this.currentUrl = url : false

        return this.is_has;
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
        return process.env.APP_URL + '?' + this.queryParam + '=' + encodeURIComponent(this.getCurrentUrl())
    }
}