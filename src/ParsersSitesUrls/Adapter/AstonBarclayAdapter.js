const env = import.meta.env;

export default class AstonBarclayAdapter {

    currentUrl = false

    is_hsa = false

    title = 'AstonBarclay'

    queryParam = 'astonbarclayUrl'

    getTitle() {
        return this.title
    }

    is(url) {
        return url.indexOf('astonbarclay.net') !== -1;
    }

    isActive(url) {
        return url.indexOf('catalogue.astonbarclay.net') !== -1;
    }

    setDetails(details) {
        console.log(details)
    }

    getCurrentUrl () {
        return this.currentUrl
    }

    getCarSearchUrl() {
        return process.env.APP_URL + '?' + this.queryParam + '=' + encodeURIComponent(this.getCurrentUrl())
    }
}