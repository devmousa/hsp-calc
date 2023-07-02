'use client'

interface ISubjectInput {
  subjectEnglishName: string
  subject: string
  register: any
  max: number
  sumOfSemesters?: boolean
  another?: boolean
}

export default function SubjectInput({
  subjectEnglishName,
  subject,
  register,
  max,
  sumOfSemesters,
  another,
}: ISubjectInput) {
  return (
    <div className="md:basis-[calc(100%/3-1rem)] basis-full flex flex-row flex-nowrap md:whitespace-normal whitespace-pre md:text-base text-sm border border-black">
      <label
        htmlFor={subjectEnglishName}
        className="md:basis-1/3 basis-1/2 py-4 text-center bg-yellow-400"
      >
        {subject}
      </label>
      <input
        required
        name={subjectEnglishName}
        type="number"
        min={sumOfSemesters ? 40 : 0}
        max={max}
        placeholder={
          sumOfSemesters
            ? 'مجموع درجات الفترتين'
            : another
            ? `درجة ${subject}`
            : 'عدد الأسئلة التي تمت إجابتها'
        }
        className="md:basis-2/3 basis-1/2 p-4 text-center outline-none"
        {...register}
      />
    </div>
  )
}
