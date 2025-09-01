"use client";
import { useRouter } from "next/navigation";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons/faEnvelope";
import { faArrowLeft, faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

interface LoginValues {
  email: string;
  password: string;
  rememberMe: boolean;
}

const initialValues: LoginValues = {
  email: "",
  password: "",
  rememberMe: false,
};

const validationSchema = Yup.object({
  email: Yup.string().email("فرمت ایمیل صحیح نیست").required("ایمیل ضروری است"),
  password: Yup.string().required("رمز عبور ضروری است"),
});
/**
 * Login component renders a user login form with email, password, and remember-me functionality.
 * Uses Formik for form state and Yup for validation. On success, redirects to homepage.
 *
 * @component
 * @returns {JSX.Element} A styled login form with validation and server-side submission
 */
export default function Login() {
  const router = useRouter();

  const handleSubmit = async (
    values: LoginValues,
    { setSubmitting, setErrors }: FormikHelpers<LoginValues>
  ) => {
    setSubmitting(true);
    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const result = await res.json();

      if (!res.ok) {
        setErrors({ email: result.error });
      } else {
        // Success: Redirect
        router.push("/");
      }
    } catch (err) {
      console.log(err);

      alert("مشکل اتصال به سرور. لطفاً دوباره تلاش کنید.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-[#003d5b] text-xl font-messiri font-semibold py-2 text-center">
        خوش برگشتی
      </h2>
      <p className="text-center text-sm text-[#003d5b]/80 max-w-xs mx-auto mb-8">
        ورود به حساب کاربری
      </p>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            {/* Email Field */}
            <div className="w-full flex justify-start items-center h-10 border border-gray-200 rounded-lg mb-2">
              <label className="w-10 h-10 flex justify-center items-center">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="text-lg text-[#003d5b]"
                />
              </label>
              <Field
                type="email"
                name="email"
                placeholder="ایمیل آدرس"
                className="h-full grow outline-none text-[#003d5b]"
              />
            </div>
            <ErrorMessage
              name="email"
              component="div"
              className="text-red-500 text-xs mb-2"
            />

            {/* Password Field */}
            <div className="w-full flex justify-start items-center h-10 border border-gray-200 rounded-lg mb-2">
              <label className="w-10 h-10 flex justify-center items-center">
                <FontAwesomeIcon
                  icon={faLock}
                  className="text-lg text-[#003d5b]"
                />
              </label>
              <Field
                type="password"
                name="password"
                placeholder="رمز عبور"
                className="h-full grow outline-none text-[#003d5b]"
              />
            </div>
            <ErrorMessage
              name="password"
              component="div"
              className="text-red-500 text-xs mb-2"
            />

            {/* Remember Me & Forgot Password */}
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center gap-1.5 text-sm text-[#003d5b]">
                <Field
                  type="checkbox"
                  name="rememberMe"
                  id="rememberMe"
                  className="accent-[#00798c]"
                />
                <label htmlFor="rememberMe">بخاطر بسپار</label>
              </div>
              <Link href="#" className="text-sm text-[#00798c] font-semibold">
                بازیابی رمز
              </Link>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 flex justify-center items-center gap-2 rounded-lg text-white/80 text-sm font-medium bg-[#003d5b]/95 hover:bg-[#003d5b] my-4 transition-all"
            >
              {isSubmitting ? (
                "در حال ورود..."
              ) : (
                <>
                  <span>ورود به اکانت</span>
                  <FontAwesomeIcon icon={faArrowLeft} />
                </>
              )}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
