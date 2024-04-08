export default class AstonBarclayAdapter {

    currentUrl = false

    is_hsa = false

    title = 'AstonBarclay'

    queryParam = 'astonbarclayUrl'

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

    getTitle() {
        return this.title
    }

    getCarSearchUrl() {
        return 'http://carsearch.local/campaigns/create' + '?' + this.queryParam + '=' + encodeURIComponent(this.getCurrentUrl())
    }
}