/* Create a lovely Thing with an id and a rating.
 * ~ id: any identifer (doesn't have to be unique).
 * ~ rating: the base rating for this Thing (default: exports.rating (1600))
 *           [see: "Elo rating system" on Wikipedia]
 */
function Thing(id, rating) {
    this.id = id;
    if (typeof rating === "undefined") {
        this.rating = exports.rating;
    } else {
        this.rating = rating;
    }
}

/* Figure out our win expectancy against another Thing
 * ~ other: another Thing we're comparing against
 */
Thing.prototype.expectancy = function (other) {
    var e = 1 / (1 + Math.pow(10, (other.rating - this.rating) / 400));
    return e;
}

/* Rerate this Thing against another Thing depending on if it won or not.
 * ~ other: another Thing that we're rerating against
 * ~ score: 1 (we won), 0 (we lost), 0.5 (a draw)
 * ~ k: a k-value to use (default: exports.k (20)) [see: "Elo rating system" on Wikipedia]
 */
Thing.prototype.rerate = function (other, score, k) {
    if (typeof k === "undefined") {
        k = exports.k;
    }
    var new_rating = this.rating + (k * (score - this.expectancy(other)));
    this.rating = new_rating;
    return new_rating;
}

exports.Thing = Thing;
exports.rating = 1600;
exports.k = 20;
