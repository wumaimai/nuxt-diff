import api from "../util/api/bxApi"

export default ({ app }, inject) => {
    // Set the function directly on the context.app object
    app.$api = api;
}