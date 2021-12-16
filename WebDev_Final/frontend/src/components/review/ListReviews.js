import React from 'react'
import {Link} from "react-router-dom";

const ListReviews = ({ reviews }) => {
    return (
        <div class="reviews w-75">
            <h3>Other's Reviews:</h3>
            <hr />
            {reviews && reviews.map(review => (
                <div key={review._id} class="review-card my-3">
                    <div class="rating-outer">
                        <div class="rating-inner" style={{ width: `${(review.rating / 5) * 100}%` }}></div>
                    </div>
                    <Link to={`/user/${review._id}`} class="review_user">by {review.name}</Link>
                    <p class="review_comment">{review.comment}</p>

                    <hr />
                </div>
            ))}
        </div>
    )
}

export default ListReviews