import Validator from "password-validator";
import { CitedQuoteError } from "./cited-quote.error";
import isEmail from "validator/lib/isEmail";

class CitedQuoteUtility {
  validateContent = (content: string) => {
    const contentSchema = new Validator();
    contentSchema.is().min(5).is().max(500);
    return contentSchema.validate(content) ? null : CitedQuoteError.Content;
  };

  validateAuthor = (author: string) => {
    const authorSchema = new Validator();
    authorSchema.is().min(5).is().max(50);
    return authorSchema.validate(author) ? null : CitedQuoteError.Author;
  };

  validateEmail = (email: string) => {
    return isEmail(email) ? null : CitedQuoteError.Email;
  };

  getContentColor = (length: number): string => {
    if (length < 5 || length > 390) return "red";
    else return "green";
  };

  getAuthorColor = (length: number): string => {
    if (length < 5 || length > 50) return "red";
    else return "green";
  };
}

export default CitedQuoteUtility;
export const citedQuoteUtility = new CitedQuoteUtility();
