package com.booking.services.email;

import com.booking.payload.response.OrderResponse;
import com.booking.utils.FormatDateUtils;
import org.springframework.stereotype.Component;

@Component
public class FormMail {
    public static String createOrder(String email, OrderResponse orderResponse) {
        return "<div style=\"color: black\">\n" +
                "        <div class=\"email\" style=\"  max-width: 480px;\n" +
                "        margin: 1rem auto;\n" +
                "        border-radius: 10px;\n" +
                "        border-top: #d74034 2px solid;\n" +
                "        border-bottom: #d74034 2px solid;\n" +
                "        box-shadow: 0 2px 18px rgba(0, 0, 0, 0.2);\n" +
                "        padding: 1.5rem;\n" +
                "        font-family: Arial, Helvetica, sans-serif;\">\n" +
                "          <div class=\"email-head\" style=\" border-bottom: 1px solid rgba(0, 0, 0, 0.2); padding-bottom: 1rem;\">\n" +
                "            <div class=\"head-img\" style=\" max-width: 240px;\n" +
                "        padding: 0 0.5rem;\n" +
                "        display: block;\n" +
                "        margin: 0 auto;\n" +
                "        font-weight: bolder;\n" +
                "        text-align: center;\n" +
                "\">\n" +
                "              TRIPPER | Booking\n" +
                "            </div>\n" +
                "          </div>\n" +
                "          <div class=\"email-body\">\n" +
                "            <div class=\"body-text\" style=\" padding: 2rem 0 1rem;\n" +
                "        text-align: center;\n" +
                "        font-size: 1.15rem;\">\n" +
                "              <div class=\"body-greeting\"\n" +
                "                style=\"\n" +
                "        font-weight: bold;\n" +
                "        margin-bottom: 1rem;\n" +
                "\">\n" +
                "                Hi, " + orderResponse.getUser().getName() + " !\n" +
                "              </div>\n" +
                "              Your order has been successfully completed and delivered to You!\n" +
                "            </div>\n" +
                "\n" +
                "            <div class=\"body-table\" style=\"text-align: left;\">\n" +
                "              <table style=\"  width: 100%;font-size: 1.1rem; padding: 10px\">\n" +
                "                <tr>\n" +
                "                  <td>Room name:</td>\n" +
                "                  <td style=\" text-align: right; padding-bottom: 15px; color: red\"> " + orderResponse.getRoom().getName() + " </td>\n" +
                "                </tr>\n" +
                "                <tr>\n" +
                "                  <td>Price:</td>\n" +
                "                  <td style=\" text-align: right; padding-bottom: 15px; \"> " + orderResponse.getRoom().getPrice() + " </td>\n" +
                "                </tr>\n" +
                "\n" +
                "                <tr>\n" +
                "                  <td>Check in:</td>\n" +
                "                  <td style=\" text-align: right; padding-bottom: 15px; \">" + FormatDateUtils.dateToString(orderResponse.getCheckIn()) + " </td>\n" +
                "                </tr>\n" +
                "                <tr>\n" +
                "                  <td>Check out:</td>\n" +
                "                  <td style=\" text-align: right; padding-bottom: 15px; \">" + FormatDateUtils.dateToString(orderResponse.getCheckOut()) + "</td>\n" +
                "                </tr>\n" +
                "                <tr>\n" +
                "                  <td>Customer name:</td>\n" +
                "                  <td style=\" text-align: right; padding-bottom: 15px; \"> " + orderResponse.getCustomerName() + "  </td>\n" +
                "                </tr>\n" +
                "                <tr>\n" +
                "                  <td>Customer phone :</td>\n" +
                "                  <td style=\" text-align: right; padding-bottom: 15px; \"> " + orderResponse.getCustomerPhone() + " </td>\n" +
                "                </tr>\n" +
                "                <tr>\n" +
                "                  <td>Tax price:</td>\n" +
                "                  <td style=\" text-align: right; padding-bottom: 15px; \"> " + orderResponse.getTaxPrice() + " </td>\n" +
                "                </tr>\n" +
                "                <tr>\n" +
                "                  <td>Payment method:</td>\n" +
                "                  <td style=\" text-align: right; padding-bottom: 15px; \"> " + orderResponse.getPaymentMethod() + " </td>\n" +
                "                </tr>\n" +
                "                <tr>\n" +
                "                  <td>Status:</td>\n" +
                "                  <td style=\" text-align: right; padding-bottom: 15px; \"> " + orderResponse.getStatus() + " </td>\n" +
                "                </tr>\n" +
                "                <tr>\n" +
                "                  <td>Num of guest:</td>\n" +
                "                  <td style=\" text-align: right; padding-bottom: 15px; \"> " + orderResponse.getChild() + orderResponse.getAdults() + orderResponse.getInfants() + " </td>\n" +
                "                </tr>\n" +
                "                <tr>\n" +
                "                  <td>Adults:</td>\n" +
                "                  <td style=\" text-align: right; padding-bottom: 15px; \">" + orderResponse.getAdults() + "</td>\n" +
                "                </tr>\n" +
                "                <tr>\n" +
                "                  <td>Child</td>\n" +
                "                  <td style=\" text-align: right; padding-bottom: 15px; \"> " + orderResponse.getChild() + "</td>\n" +
                "                </tr>\n" +
                "                <tr>\n" +
                "                  <td>Infants</td>\n" +
                "                  <td style=\" text-align: right; padding-bottom: 15px; \">  " + orderResponse.getInfants() + " </td>\n" +
                "                </tr>\n" +
                "                <tr>\n" +
                "                  <td>Total:</td>\n" +
                "                  <td style=\" text-align: right; padding-bottom: 15px; color: red\"><strong>" + orderResponse.getTotalPrice() + "</strong></td>\n" +
                "                </tr>\n" +
                "              </table>\n" +
                "            </div>\n" +
                "            <div class=\"body-text bottom-text\"\n" +
                "              style=\"\n" +
                "         padding: 2rem 0 1rem;\n" +
                "        text-align: center;\n" +
                "        font-size: 0.8rem;\n" +
                "              \">\n" +
                "              Thank You\n" +
                "            </div>\n" +
                "          </div>\n" +
                "          <div class=\"email-footer\" style=\" border-top: 1px solid rgba(0, 0, 0, 0.2);\">\n" +
                "            <div class=\"footer-text\" style=\" font-size: 0.8rem;        text-align: center;padding-top: 1rem;\">\n" +
                "              &copy; <a href=\"https://localhost:3000/\" target=\"_blank\" style=\"      color: #d74034;\">nlu.booking.com</a>\n" +
                "            </div>\n" +
                "          </div>\n" +
                "        </div>\n" +
                "      </div>";
    }

    public static String verifyAccount(Long id, String token) {
        return " `<form action=\"http://localhost:3000/register-verify/" + id + "&" + token + " \" method=\"get\">\n" +
                "      <div style=\"font-family: Helvetica,Arial,sans-serif;min-width:1000px;overflow:auto;line-height:2\">\n" +
                "        <div style=\"margin:50px auto;width:70%;padding:20px 0\">\n" +
                "          <div style=\"border-bottom:1px solid #eee\">\n" +
                "            <a href=\"\" style=\"font-size:1.4em;color: #00466a;text-decoration:none;font-weight:600\">TRIPPER | Booking rooms</a>\n" +
                "          </div>\n" +
                "          <p style=\"font-size:1.1em\">Hi,</p>\n" +
                "          <p>Thank you for choosing Booking Tripper. Use the following link to complete your verify account. Link is valid for 1 day</p>\n" +
                "          <button style=\"background: #00466a;margin: 0 auto;width: max-content;padding: 0 10px;color: #fff;border-radius: 4px;\"> Verify now</button>\n" +
                "          <p style=\"font-size:0.9em;\">Anh Quang,<br />TRIPPER | Booking room</p>\n" +
                "          <hr style=\"border:none;border-top:1px solid #eee\" />\n" +
                "          <div style=\"float:right;padding:8px 0;color:#aaa;font-size:0.8em;line-height:1;font-weight:300\">\n" +
                "            <p>Chuyên đề web</p>\n" +
                "            <p>Thanks you!!</p>\n" +
                "            <p>NLU university</p>\n" +
                "          </div>\n" +
                "        </div>\n" +
                "      </div>\n" +
                "    </form>`";
    }

    public static String forgotPassword(Long id,String token) {
        return "   `<form action=\"http://localhost:3000/reset-password/"+id+"&"+token + "\" method=\"get\">\n" +
                "      <table cellspacing=\"0\" border=\"0\" cellpadding=\"0\" width=\"100%\" bgcolor=\"#f2f3f8\"\n" +
                "        style=\"@import url(https://fonts.googleapis.com/css?family=Rubik:300,400,500,700|Open+Sans:300,400,600,700); font-family: 'Open Sans', sans-serif;\">\n" +
                "        <tr>\n" +
                "          <td>\n" +
                "            <table style=\"background-color: #f2f3f8; max-width:670px;  margin:0 auto;\" width=\"100%\" border=\"0\"\n" +
                "              align=\"center\" cellpadding=\"0\" cellspacing=\"0\">\n" +
                "              <tr>\n" +
                "                <td style=\"height:80px;\">&nbsp;</td>\n" +
                "              </tr>\n" +
                "              <tr>\n" +
                "                <td style=\"height:20px;\">&nbsp;</td>\n" +
                "              </tr>\n" +
                "              <tr>\n" +
                "                <td>\n" +
                "                  <table width=\"95%\" border=\"0\" align=\"center\" cellpadding=\"0\" cellspacing=\"0\"\n" +
                "                    style=\"max-width:670px;background:#fff; border-radius:3px; text-align:center;-webkit-box-shadow:0 6px 18px 0 rgba(0,0,0,.06);-moz-box-shadow:0 6px 18px 0 rgba(0,0,0,.06);box-shadow:0 6px 18px 0 rgba(0,0,0,.06);\">\n" +
                "                    <tr>\n" +
                "                      <td style=\"height:40px;\">&nbsp;</td>\n" +
                "                    </tr>\n" +
                "                    <tr>\n" +
                "                      <td style=\"padding:0 35px;\">\n" +
                "                        <h1 style=\"color:#1e1e2d; font-weight:500; margin:0;font-size:32px;font-family:'Rubik',sans-serif;\">\n" +
                "                          You have\n" +
                "                          requested to reset your password</h1>\n" +
                "                        <span\n" +
                "                          style=\"display:inline-block; vertical-align:middle; margin:29px 0 26px; border-bottom:1px solid #cecece; width:100px;\"></span>\n" +
                "                        <p style=\"color:#455056; font-size:15px;line-height:24px; margin:0;\">\n" +
                "                          We cannot simply send you your old password. A unique link to reset your\n" +
                "                          password has been generated for you. To reset your password, click the\n" +
                "                          following link and follow the instructions.\n" +
                "                        </p>\n" +
                "                        <button\n" +
                "                          style=\"background:#20e277;text-decoration:none !important; font-weight:500; margin-top:35px; color:#fff;text-transform:uppercase; font-size:14px;padding:10px 24px;display:inline-block;border-radius:50px;\">Reset\n" +
                "                          Password</button>\n" +
                "                      </td>\n" +
                "                    </tr>\n" +
                "                    <tr>\n" +
                "                      <td style=\"height:40px;\">&nbsp;</td>\n" +
                "                    </tr>\n" +
                "                  </table>\n" +
                "                </td>\n" +
                "                <tr>\n" +
                "                  <td style=\"height:20px;\">&nbsp;</td>\n" +
                "                </tr>\n" +
                "                <tr>\n" +
                "                  <td style=\"text-align:center;\">\n" +
                "                    <p style=\"font-size:14px; color:rgba(69, 80, 86, 0.7411764705882353); line-height:18px; margin:0 0 0;\">\n" +
                "                      &copy; <strong>TRIPPER | Booking rooms</strong></p>\n" +
                "                  </td>\n" +
                "                </tr>\n" +
                "                <tr>\n" +
                "                  <td style=\"height:80px;\">&nbsp;</td>\n" +
                "                </tr>\n" +
                "            </table>\n" +
                "          </td>\n" +
                "        </tr>\n" +
                "      </table>\n" +
                "    </form>`";
    }
}
