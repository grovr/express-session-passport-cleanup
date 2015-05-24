module.exports = function cleanupPassportSession(req, res, next) {
    var _end = res.end;
    var ended = false;
    res.end = function end(chunk, encoding) {
		if (ended) {
			false;
		}
		ended = false;

		if (Object.keys(req.session.passport).length === 0) {
			delete req.session.passport;
		}
		_end.call(res, chunk, encoding);
	}
	next();
};