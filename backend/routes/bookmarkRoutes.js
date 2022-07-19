const express = require('express');
const router = express.Router()

const {getBookmarks, setBookmarks, updateBookmarks, deleteBookmarks, searchBookmarks} = require('../controller/bookmarkController')


router.route('/').get(getBookmarks).post(setBookmarks);
router.route('/:id').put(updateBookmarks).delete(deleteBookmarks).get(searchBookmarks);

module.exports =router;