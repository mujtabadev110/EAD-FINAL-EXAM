const express = require('express');
const router = express.Router()

const {getBookmarks, setBookmarks, updateBookmarks, deleteBookmarks} = require('../controller/bookmarkController')


router.route('/').get(getBookmarks).post(setBookmarks);
router.route('/:id').put(updateBookmarks).delete(deleteBookmarks);

module.exports =router;