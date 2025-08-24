import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import {
  faTruckFast,
  faUser,
  faPhone,
  faMapLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/app/_hooks/useAppDispatch";
import { cartSliceActions } from "@/app/_store/cart-slice";
/**
 * DeliveryForm component handles user delivery information input during checkout,
 * including name, phone, address, and optional delivery notes.
 *
 * Libraries:
 * - `Formik`: Form state management and submission.
 * - `Yup`: Validation schema for required fields and format checks.
 * - `FontAwesome`: Icons for improved field clarity.
 * - Next.js `useRouter` and custom Redux dispatch for flow control.

 * Fields:
 * - `fullName`: Required, with Persian label.
 * - `phone`: Required, must be all digits.
 * - `address`: Required delivery address.
 * - `deliveryNote`: Optional textarea for user instructions.
 */

interface DeliveryValues {
  fullName: string;
  phone: string;
  address: string;
  deliveryNote?: string;
}

const initialValues: DeliveryValues = {
  fullName: "",
  phone: "",
  address: "",
  deliveryNote: "",
};

const validationSchema = Yup.object({
  fullName: Yup.string().required("نام کامل ضروری است"),
  phone: Yup.string()
    .matches(/^[0-9]+$/, "شماره تلفن باید فقط شامل اعداد انگلیسی باشد")
    .required("شماره تلفن ضروری است"),
  address: Yup.string().required("آدرس ضروری است"),
  deliveryNote: Yup.string(),
});

export default function DeliveryForm() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const handleSubmit = () => {
    dispatch(cartSliceActions.emptyCart());
    router.push("/checkout/success");
  };

  return (
    <div className="border border-gray-100 shadow-md p-4 mt-4 rounded-xl">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
              {/* Full Name */}
              <div className="w-full sm:w-1/2">
                <div className="flex items-start h-10 border border-gray-200 rounded-lg mb-2">
                  <label className="w-10 flex justify-center items-center h-10">
                    <FontAwesomeIcon icon={faUser} className="text-[#003d5b]" />
                  </label>
                  <Field
                    name="fullName"
                    placeholder="نام کامل"
                    className="h-full grow outline-none text-[#003d5b]"
                  />
                </div>
                <ErrorMessage
                  name="fullName"
                  component="div"
                  className="text-red-500 text-xs mb-2"
                />
              </div>

              {/* Phone Number */}
              <div className="w-full sm:w-1/2">
                <div className=" flex-1/2 flex items-center h-10 border border-gray-200 rounded-lg mb-2">
                  <label className="w-10 flex justify-center items-center h-10">
                    <FontAwesomeIcon
                      icon={faPhone}
                      className="text-[#003d5b]"
                    />
                  </label>
                  <Field
                    name="phone"
                    placeholder="شماره تماس"
                    className="h-full grow outline-none text-[#003d5b]"
                  />
                </div>
                <ErrorMessage
                  name="phone"
                  component="div"
                  className="text-red-500 text-xs mb-2"
                />
              </div>
            </div>

            {/* Address */}
            <div className="w-full flex items-center h-10 border border-gray-200 rounded-lg mb-2">
              <label className="w-10 flex justify-center items-center h-10">
                <FontAwesomeIcon
                  icon={faMapLocationDot}
                  className="text-[#003d5b]"
                />
              </label>
              <Field
                name="address"
                placeholder="آدرس کامل"
                className="h-full grow outline-none text-[#003d5b]"
              />
            </div>
            <ErrorMessage
              name="address"
              component="div"
              className="text-red-500 text-xs mb-2"
            />

            {/* Delivery Note */}
            <div className="mb-4">
              <Field
                as="textarea"
                name="deliveryNote"
                placeholder="یادداشت برای ارسال (اختیاری)"
                className="w-full resize-none border border-gray-200 rounded-lg p-2 outline-none text-[#003d5b]"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 flex justify-center items-center gap-2 rounded-lg text-white/80 text-sm font-medium bg-[#003d5b]/95 hover:bg-[#003d5b] transition-all"
            >
              {isSubmitting ? " در حال ثبت" : "ثبت اطلاعات ارسال"}

              <FontAwesomeIcon icon={faTruckFast} />
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
