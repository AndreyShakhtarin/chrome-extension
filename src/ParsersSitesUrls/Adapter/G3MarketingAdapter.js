const env = import.meta.env;

export default class G3MarketingAdapter {

    currentUrl = false

    is_hsa = false

    title = 'G3'

    queryParam = 'g3Url'

    is(url) {
        return url.indexOf('g3remarketing.co.uk/lots') !== -1;
    }

    isActive(url) {
        return url.indexOf('g3remarketing.co.uk') !== -1;
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
        return process.env.APP_URL +  + '?' + this.queryParam + '=' + encodeURIComponent(this.getCurrentUrl())
    }
}