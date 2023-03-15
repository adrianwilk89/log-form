module.exports = function logParser(log) {
    try {
        const parserRegexp = new RegExp(/(?<type>E|I|W)\s(?<severity>[0-9]{0,5})\s?(?<timestamp>[0-9]{0,5})\s?(?<message>.*)/)
        return parserRegexp.exec(log)?.groups
    } catch (e) {
        // do something..
    }
}

