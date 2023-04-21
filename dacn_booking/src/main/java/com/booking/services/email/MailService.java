package com.booking.services.email;

import lombok.RequiredArgsConstructor;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

@Service
@RequiredArgsConstructor
public class MailService {
    private final JavaMailSender mailSender;

    public void sendMail(String toMail, String subject, String text) {
        MimeMessage message = mailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(message);
        try {
            helper.setFrom("dannguyenvan@gmail.com");
            helper.setSubject(subject);
            helper.setTo(toMail);
            boolean html = true;
            helper.setText(text, html);
        } catch (MessagingException e) {
            throw new RuntimeException(e);
        }
        mailSender.send(message);
        System.out.println("Mail sent successfully");
    }
}
