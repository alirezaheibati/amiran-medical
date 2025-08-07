import { Formik, Field, Form, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";
/**
 * Validation schema for the contact form using Yup.
 * Ensures all fields are filled and email is valid.
 */
const validationSchema = Yup.object({
  patient: Yup.string().required("نام و نام خانوادگی خود را وارد نمایید."),
  email: Yup.string()
    .email("آدرس ایمیل معتبر نمیاشد.")
    .required("آدرس ایمیل خود را وارد نمایید."),
  subject: Yup.string().required("موضوع پیام خود را وارد نمایید."),
  comment: Yup.string().required("متن پیام خود را وارد نمایید."),
});
interface FormValues {
  name: string;
  email: string;
  subject: string;
  comment: string;
}
/**
 * A contact form component for users to send feedback directly to management.
 *
 * @component
 * @returns {JSX.Element} A styled form with validation and submission handling.
 */
export default function WriteFotUs() {
  const initialValues = {
    name: "",
    email: "",
    subject: "",
    comment: "",
  };
  /**
   * Handles form submission.
   *
   * @param {FormValues} values - The submitted form values.
   * @param {FormikHelpers<FormValues>} formikHelpers - Helper methods from Formik.
   */
  const handleSubmit = (
    values: FormValues,
    formikHelpers: FormikHelpers<FormValues>
  ) => {
    const { setSubmitting, resetForm } = formikHelpers;
    // Now TypeScript knows what setSubmitting is!
    resetForm();
    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className="rounded-xl p-4">
          <h2 className="text-center font-messiri mb-2 text-xl font-semibold">
            تماس با مدیریت
          </h2>
          <p className="text-center mb-4 text-sm">
            در صورتی که انتقاد یا پیشنهادی درباره نحوه ارائه خدمات امیران تجهیز
            دارید، لطفا با ما به اشتراک بگذارید. این پیام ها مستقیما در اختیار
            مدیریت مجموعه قرار میگیرد.
          </p>
          <div className="py-2">
            <label htmlFor="patient" className="block mb-1">
              نام و نام خانوادگی:
            </label>
            <Field
              type="text"
              id="name"
              name="name"
              className="w-full rounded-lg h-9 px-2 outline-none bg-gray-100"
            />
            <ErrorMessage
              name="name"
              component="div"
              className="text-red-500"
            />
          </div>
          <div className="py-2">
            <label htmlFor="email" className="block mb-1">
              ایمیل:
            </label>
            <Field
              type="email"
              id="email"
              name="email"
              className="w-full rounded-lg h-9 px-2 outline-none bg-gray-100"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="text-red-500"
            />
          </div>
          <div className="py-2">
            <label htmlFor="subject" className="block mb-1">
              موضوع پیام:
            </label>
            <Field
              type="text"
              id="subject"
              name="subject"
              className="w-full rounded-lg h-9 px-2 outline-none bg-gray-100"
            />
            <ErrorMessage
              name="subject"
              component="div"
              className="text-red-500"
            />
          </div>

          <div className="py-2">
            <label htmlFor="comment" className="block mb-1">
              پیام شما:
            </label>
            <Field
              as="textarea"
              name="comment"
              id="comment"
              className="w-full resize-none rounded-lg h-20 px-2 outline-none bg-gray-100"
            />
            <ErrorMessage
              name="comment"
              component="div"
              className="text-red-500"
            />
          </div>

          <button
            type="submit"
            className="bg-[#003d5d] text-slate-50 rounded-lg w-full py-2 cursor-pointer active:scale-95"
            disabled={isSubmitting}
          >
            {isSubmitting ? "در حال ارسال" : "ارسال پیام"}
          </button>
        </Form>
      )}
    </Formik>
  );
}
