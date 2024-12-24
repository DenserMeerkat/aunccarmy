import React from "react";
import { SquareUser } from "lucide-react";
import CldImage from "@/components/common/cld-image";

export const AnoCard = (props: any) => {
  let { name, alt, platoon, desig, dept } = props;
  const { public_id } = props;
  name = name?.length > 0 ? name : "<Name with Rank>";
  alt = alt?.length > 0 ? `Picture of ${name}` : "";
  platoon = platoon?.length > 0 ? `${platoon}  platoon` : "<Platoon>";
  desig = desig?.length > 0 ? desig : "<Designation>";
  dept = dept?.length > 0 ? dept : "<Department>";
  return (
    <div className="flex min-h-44 max-w-96 overflow-clip border bg-gradient-to-t from-muted/80 to-muted/40 shadow-md backdrop-blur-sm xs:min-h-48 xs:rounded-md">
      {public_id != null ? (
        <CldImage
          className="aspect-[250/188] max-w-[40%] select-none border-r bg-background"
          width={250}
          height={187.5}
          src={public_id}
          alt={alt}
        />
      ) : (
        <div className="grid w-[200px] select-none place-items-center border-r bg-background sm:w-[250px]">
          <SquareUser className="mx-auto my-auto h-24 w-24 text-muted" />
        </div>
      )}
      <div className="flex w-full flex-col items-center justify-between py-3 sm:py-4">
        <div>
          <div className="mx-auto mb-2 w-fit rounded-full border border-foreground/10 bg-muted px-4 py-1">
            <p className="text-xs font-semibold tracking-wider text-foreground/70 dark:text-muted-foreground">
              {platoon}
            </p>
          </div>
          <h3 className="max-w-44 text-center text-sm font-bold">{name}</h3>
        </div>
        <div className="self-start pl-3 text-left text-xs font-medium text-muted-foreground xs:pl-4">
          <p className="mb-1 font-semibold text-foreground">{desig}</p>
          <p>{dept}</p>
          <span>Anna University</span>
        </div>
      </div>
    </div>
  );
};
