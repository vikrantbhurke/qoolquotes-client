import { citedQuoteUtility } from "@/cited-quote/cited-quote.utility";
import { useCreateCitedQuote } from "./use-create-cited-quote.hook";
import { useForm } from "@mantine/form";

export const useCreateCitedQuoteForm = () => {
  const { createCitedQuoteMutation, isPending } = useCreateCitedQuote();

  const form = useForm({
    mode: "controlled",
    initialValues: {
      content: "",
      author: "",
      citation: "",
      email: "",
    },

    validate: {
      content: citedQuoteUtility.validateContent,
      author: citedQuoteUtility.validateAuthor,
      email: citedQuoteUtility.validateEmail,
    },
  });

  const handleCreateCitedQuote = (values: any) => {
    const { content, author, citation, email } = values;
    createCitedQuoteMutation({ content, author, citation, email });
    form.reset();
  };

  return { form, handleCreateCitedQuote, isPending };
};
