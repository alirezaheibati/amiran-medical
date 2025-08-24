"use client";
import PageHeader from "@/app/components/ui/PageHeader";
import { faPeopleCarryBox } from "@fortawesome/free-solid-svg-icons";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const financialSoftwareOptions = [
  "سپیدز",
  "سپند",
  "حامی",
  "ساتراپ",
  "آریا",
  "فودسافت",
  "بدون نرم افزار",
];
/**
 * CoopertatePage component renders a partnership request form for businesses.
 * Utilizes Formik and Yup for form state management and validation.
 * Includes fields for business name, owner info, contact number, branch count,
 * delivery availability, and financial software selection.
 *
 * @component
 * @returns {JSX.Element} A styled form section for submitting cooperation requests
 */
export default function CoopertatePage() {
  return (
    <>
      <section className="max-w-7xl mx-auto px-4 mb-8 pt-8">
        <div className="pb-8">
          <PageHeader title="همکاری در فروش" icon={faPeopleCarryBox} />
          <Formik
            initialValues={{
              name: "",
              owner: "",
              ownerPhone: "",
              branches: 0,
              hasDelivery: false,
              financialSoftware: "",
            }}
            validationSchema={Yup.object({
              name: Yup.string().required("نام مجموعه باید وارد شود"),
              owner: Yup.string().required("نام صاحب مجموعه باید وارد شود"),
              ownerPhone: Yup.string()
                .matches(/^09[0-9]{9}$/, "فرمت شماره موبایل صحیح نمیباشد")
                .min(11, "فرمت شماره موبایل صحیح نمیباشد")
                .required("شماره موبایل باید وارد شود"),
              branches: Yup.number()
                .min(1, "حداقل یک شعبه الزامی است")
                .required("تعداد شعب باید وارد شود"),
              financialSoftware: Yup.string().required(
                "نرافزار حسابداری مجموعه را انتخاب کنید"
              ),
            })}
            onSubmit={(values, { resetForm }) => {
              //   add code for posting form to backend
              console.log(values);
              alert("درخواست شما با موفقیت ثبت شد");
              resetForm();
            }}
          >
            {({ values }) => (
              <Form className="restaurant-form rounded-2xl bg-[#003d5d]/10 w-full max-w-[600px]     mx-auto p-8">
                <h2 className="text-center font-semibold text-2xl mb-2 text-[#003d5d]">
                  ثبت درخواست همکاری در امیران تجهیز
                </h2>
                <p className="text-sm text-center mb-2">
                  اطلاعات مجموعه خود را با دقت وارد کنید
                </p>
                <div className="flex justify-between items-center pt-4 gap-4">
                  <div className="flex-1  h-16">
                    <Field
                      id="name"
                      name="name"
                      type="text"
                      className="bg-white h-10 w-full rounded-lg px-2 outline-none mb-0.5"
                      placeholder="نام مجموعه"
                    />
                    <ErrorMessage
                      className="text-red-500"
                      name="name"
                      component="div"
                    />
                  </div>
                  <div className="flex-1  h-16">
                    <Field
                      id="owner"
                      name="owner"
                      type="text"
                      className="bg-white h-10 w-full rounded-lg px-2 outline-none mb-0.5"
                      placeholder="نام مدیر"
                    />
                    <ErrorMessage
                      className="text-red-500"
                      name="owner"
                      component="div"
                    />
                  </div>
                </div>
                <div className="flex justify-between items-center pt-4 gap-4 w-full">
                  <div className="flex-1  h-16">
                    <Field
                      id="ownerPhone"
                      name="ownerPhone"
                      type="text"
                      className="bg-white h-10 w-full rounded-lg px-2 outline-none mb-0.5"
                      placeholder="شماره تماس مدیریت"
                    />
                    <ErrorMessage
                      className="text-red-500"
                      name="ownerPhone"
                      component="div"
                    />
                  </div>
                  <div className="flex-1  h-16">
                    <Field
                      id="branches"
                      name="branches"
                      type="number"
                      min="1"
                      className="bg-white h-10 w-full rounded-lg px-2 outline-none mb-0.5"
                      placeholder="تعداد شعب"
                    />
                    <ErrorMessage
                      className="text-red-500"
                      name="branches"
                      component="div"
                    />
                  </div>
                </div>
                <div className="flex justify-between items-start pt-4 gap-4 w-full">
                  <div className="flex-1  h-16">
                    <Field
                      as="select"
                      id="financialSoftware"
                      name="financialSoftware"
                      className="bg-white h-10 w-full rounded-lg px-2 outline-none mb-0.5"
                    >
                      <option value="" label="نرم افزار حسابداری" />
                      {financialSoftwareOptions.map((software, index) => (
                        <option key={index} value={software} label={software} />
                      ))}
                    </Field>
                    <ErrorMessage
                      className="text-red-500"
                      name="financialSoftware"
                      component="div"
                    />
                  </div>
                  <div className="flex-1  h-10 flex justify-start items-center gap-4">
                    <label className="block" htmlFor="hasDelivery">
                      پیک اختصاصی دارد؟
                    </label>
                    <Field
                      type="checkbox"
                      name="hasDelivery"
                      id="hasDelivery"
                      className="block rounded-lg outline-none mb-0.5 h-10"
                      checked={values.hasDelivery}
                    />
                  </div>
                </div>

                <div className="w-full pt-6">
                  <button
                    type="submit"
                    className="block w-full bg-[#003d5d] font-messiri rounded-lg py-2 text-slate-50 text-lg font-semibold"
                  >
                    ثبت اطلاعات
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </section>
    </>
  );
}
