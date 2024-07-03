package com.choufli7al.service;

import java.util.List;

import com.choufli7al.model.Competance;
import com.choufli7al.model.Review; 

public interface ReviewService {
	List<Review> findByCompetance(Competance competance);
 	Review findReviewById(Long id);
	 void deleteReview(Long id);
  	Review addNewReview(Review review, Long userId, Long idcomptance);
	Double getAverageRating(Long competanceId);

}
