package com.choufli7al.service;

import java.util.List;

import com.choufli7al.model.Message;
import com.choufli7al.model.Utilisateurs;

 
public interface MessageService {

 	List<Message> allMsg();
	List<Message> findByRecipientAndSender(Utilisateurs  recipient , Utilisateurs sender);
    List<Message> findBySenderAndRecipient(Utilisateurs  sender, Utilisateurs  recipient );
    List<Message> findByRecipient(Utilisateurs recipient);
	Message sendMessage(Message message, Long idSender, Long idrecipter);

	}
