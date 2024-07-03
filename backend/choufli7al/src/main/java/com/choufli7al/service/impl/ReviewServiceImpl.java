package com.choufli7al.service.impl;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.choufli7al.model.Competance;
import com.choufli7al.model.Review;
import com.choufli7al.model.Utilisateurs;
import com.choufli7al.repository.CompetanceRepo;
import com.choufli7al.repository.ReviewRepo;
import com.choufli7al.repository.UtilisateurRepo;
import com.choufli7al.service.ReviewService;
@Service
public class ReviewServiceImpl implements ReviewService {

	@Autowired
	private ReviewRepo reviewRepo;
	@Autowired
	private UtilisateurRepo utilisateurRepo;
	
	@Autowired
	private CompetanceRepo competanceRepo;
	@Override
	public List<Review> findByCompetance(Competance competance) {
		// TODO Auto-generated method stub
		return reviewRepo.findByCompetance(competance);
	}

	@Override
	public Review findReviewById(Long id) {
		// TODO Auto-generated method stub
		return reviewRepo.findById(id).get();
	}

	@Override
	public void deleteReview(Long id) {
		// TODO Auto-generated method stub
		reviewRepo.deleteById(id);
	}

	@Override
	public Review addNewReview(Review review, Long userId, Long idcomptance) {
		Utilisateurs client=utilisateurRepo.findById(userId).get();
		Competance competance =competanceRepo.findById(idcomptance).get();

		boolean exist=reviewRepo.existsByCompetanceAndStart(competance, review.getStart());
		if(!exist) {
			review.setClient(client);
		review.setCompetance(competance);
		review.setContent(review.getContent());
		review.setStart(review.getStart());
		review.setDateCreation(new Date());
		
		return reviewRepo.save(review);
		}else {
			return null;
		}
		
	}
	@Override
	 public Double getAverageRating(Long competanceId) {
	        return reviewRepo.findAverageRatingByCompetanceId(competanceId);
	    }
}
