module.exports = {
		"extends": "plugin:unicorn/recommended",
		"plugins": [
			"jsdoc",
			"unicorn"
		],
		"rules": {
			"jsdoc/check-param-names": 1,
			"jsdoc/check-tag-names": 1,
			"jsdoc/check-types": 1,
			"jsdoc/newline-after-description": 1,
			"jsdoc/require-description-complete-sentence": 1,
			"jsdoc/require-param": 1,
			"jsdoc/require-param-description": 1,
			"jsdoc/require-param-name": 1,
			"jsdoc/require-param-type": 1,
			"jsdoc/require-returns-description": 1,
			"jsdoc/require-returns-type": 1
		},
}
