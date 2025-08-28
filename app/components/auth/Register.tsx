"use client";
import { useRouter } from "next/navigation";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons/faEnvelope";
import { faCheck, faLock, faRepeat } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

interface RegisterValues {
  username: "anonymous";
  email: string;
  password: string;
  confirmPassword: string;
  acceptedPolicy: boolean;
}

const initialValues: RegisterValues = {
  username: "anonymous",
  email: "",
  password: "",
  confirmPassword: "",
  acceptedPolicy: false,
};

const validationSchema = Yup.object({
  email: Yup.string().email("فرمت ایمیل صحیح نیست").required("ایمیل ضروری است"),
  password: Yup.string().required("رمز عبور ضروری است"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "رمز عبور یکسان نیست")
    .required("تکرار رمز عبور ضروری است"),
  acceptedPolicy: Yup.boolean()
    .oneOf([true], "باید با قوانین موافقت کنید")
    .required("تایید قوانین ضروری است"),
});
/**
 * Register component renders a user registration form with validation and policy agreement.
 * Uses Formik for form state and Yup for validation. On success, redirects to homepage.
 *
 * @component
 * @returns {JSX.Element} A styled registration form with email, password, and privacy agreement
 */
export default function Register() {
  const router = useRouter();
  const handleSubmit = async (
    values: RegisterValues,
    { setSubmitting, setErrors }: FormikHelpers<RegisterValues>
  ) => {
    setSubmitting(true);
    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const result = await res.json();

      if (!res.ok) {
        if (res.status === 409) {
          setErrors({ email: result.error }); // Email already exists
        } else {
          // Generic server error
          alert(result.error || "خطایی در ثبت‌نام رخ داد.");
        }
      } else {
        // Success: Redirect or show toast
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
        خوش آمدید
      </h2>
      <p className="text-center text-sm text-[#003d5b]/80 max-w-xs mx-auto mb-8">
        ساخت حساب کاربری جدید
      </p>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form>
            {/* Email */}
            <div className="w-full flex items-center h-10 border border-gray-200 rounded-lg mb-2">
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

            {/* Password */}
            <div className="w-full flex items-center h-10 border border-gray-200 rounded-lg mb-2">
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

            {/* Repeat Password */}
            <div className="w-full flex items-center h-10 border border-gray-200 rounded-lg mb-2">
              <label className="w-10 h-10 flex justify-center items-center">
                <FontAwesomeIcon
                  icon={faRepeat}
                  className="text-lg text-[#003d5b]"
                />
              </label>
              <Field
                type="password"
                name="confirmPassword"
                placeholder="تکرار رمز عبور"
                className="h-full grow outline-none text-[#003d5b]"
              />
            </div>
            <ErrorMessage
              name="confirmPassword"
              component="div"
              className="text-red-500 text-xs mb-2"
            />

            {/* Policy Agreement */}
            <div className="flex justify-between items-center mb-3">
              <div className="flex items-center gap-1.5 text-sm text-[#003d5b]">
                <Field
                  type="checkbox"
                  name="acceptedPolicy"
                  id="acceptedPolicy"
                  className="accent-[#00798c]"
                />
                <label
                  htmlFor="acceptedPolicy"
                  className="flex items-center gap-1 text-sm"
                >
                  <span>با</span>
                  <Link
                    href="/faq"
                    className="text-[#00798c]/80 hover:text-[#00798c] font-semibold"
                  >
                    شرایط استفاده
                  </Link>
                  <span>و قوانین</span>
                  <Link
                    href="/rules"
                    className="text-[#00798c]/80 hover:text-[#00798c] font-semibold"
                  >
                    حریم خصوصی
                  </Link>
                  <span>موافقم.</span>
                </label>
              </div>
            </div>
            <ErrorMessage
              name="acceptedPolicy"
              component="div"
              className="text-red-500 text-xs mb-2"
            />

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 flex justify-center items-center gap-2 rounded-lg text-white/80 text-sm font-medium bg-[#003d5b]/95 hover:bg-[#003d5b] my-4 transition-all"
            >
              ساخت اکانت
              <FontAwesomeIcon icon={faCheck} />
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
