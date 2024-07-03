package com.choufli7al.service.impl;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.choufli7al.model.Message;
import com.choufli7al.model.Utilisateurs;
import com.choufli7al.repository.MessageRepository;
import com.choufli7al.repository.UtilisateurRepo;
import com.choufli7al.service.MessageService; 
 
 
 @Service
public class MessageServiceImpl implements MessageService{

	@Autowired
	private UtilisateurRepo UtilisateursService;
	@Autowired
	private MessageRepository messageRepo;
	@Override
	public Message sendMessage(Message message , Long idSender , Long idrecipter) {
		Utilisateurs sendToUtilisateurs = UtilisateursService.findById(idSender).get();
		Utilisateurs receptUtilisateurs = UtilisateursService.findById(idrecipter).get();
		message.setSender(sendToUtilisateurs);
		message.setRecipient(receptUtilisateurs);
		message.setContent(message.getContent());
		message.setTimestamp(new Date());
		return messageRepo.save(message);
	}
	
	



	@Override
	public List<Message> allMsg() {
		// TODO Auto-generated method stub
		return messageRepo.findAll();
	}





	@Override
public	List<Message> findByRecipientAndSender(Utilisateurs  sender , Utilisateurs recipient )
	{
		
	 return messageRepo.findBySenderAndRecipient(sender, recipient);
		
	}





	@Override
	public List<Message> findBySenderAndRecipient(Utilisateurs sender, Utilisateurs recipient) {
		// TODO Auto-generated method stub
		return messageRepo.findByRecipientAndSenderOrderByTimestamp(recipient, sender);
	}





	@Override
	public List<Message> findByRecipient(Utilisateurs recipient) {
		// TODO Auto-generated method stub
		return messageRepo.findByRecipient(recipient);
	}





}
