import UploadCard from "./UploadCard";
import ManualEntry from "./ManualEntry";
import RunAuditButton from "./RunAuditButton";

export default function InputSection() {

    return (

        <section className="mx-auto max-w-7xl px-6 py-16">

            <div className="mb-12 text-center">

                <h2
                    className="
                        text-4xl
                        font-bold
                        text-white
                    "
                >

                    Provide Lottery Data

                </h2>

                <p
                    className="
                        mt-4
                        text-lg
                        text-slate-400
                    "
                >

                    Upload a CSV containing historical lottery draws or
                    manually enter draw numbers to begin the quantum
                    randomness audit.

                </p>

            </div>

            <div
                className="
                    grid
                    gap-8
                    lg:grid-cols-2
                "
            >

                <UploadCard />

                <ManualEntry />

            </div>

            <div className="mt-10">

                <RunAuditButton />

            </div>

        </section>

    );

}
