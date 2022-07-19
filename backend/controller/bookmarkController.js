const asyncHandler = require('express-async-handler')

const Bookmark = require('../models/bookmarkModel')

//GET Bookmarks

const getBookmarks = asyncHandler( async(req, res)=>{

    const bookmark = await Bookmark.find()
    res.status(200).json(bookmark)
})


//SET Bookmarks

const setBookmarks = asyncHandler( async(req, res)=>{
    if(!req.body.text){
        res.status(400)
        throw new Error('Please add a text field')
    }

    const bookmark = await Bookmark.create({
        text: req.body.text
    })

    res.status(200).json(bookmark)
})

//UPDATE Bookmark

const updateBookmarks = asyncHandler( async(req, res)=>{

    const bookmark = await Bookmark.findById(req.params.id)

    if(!bookmark){
        res.status(400)
        throw new Error('Bookmark Not Found')
    }

    const updatedBookmark = await Bookmark.findByIdAndUpdate(req.params.id, req.body, {new: true,})

    res.status(200).json(updatedBookmark)
})



//DELETE Bookmark


const deleteBookmarks = asyncHandler( async(req, res)=>{

    const bookmark = await Bookmark.findById(req.params.id)

    if(!bookmark){
        res.status(400)
        throw new Error('Bookmarks Not Found')
    }

    await bookmark.remove()

    res.status(200).json({id: req.params.id})
})


//Get Bookmark by ID(search)
const searchBookmarks = asyncHandler( async(req, res)=>{

    const bookmark = await Bookmark.findById(req.params.id)

    if(!bookmark){
        res.status(400)
        throw new Error('Bookmarks Not Found')
    }

    res.status(200).json(bookmark)
})

module.exports = {
    getBookmarks,
    setBookmarks,
    updateBookmarks,
    deleteBookmarks,
    searchBookmarks,
}