import { Transform } from "stream";
import { BigQueryRow } from "./types";
import { debug } from "./utils.log";

export function printProgress(): Transform {
  return new Transform({
    objectMode: true,
    transform: (row: BigQueryRow, encoding, done) => {
      const message = `Sending stats for: ${row.plugin_id} / ${row.package_name}`;

      debug(message);

      done(null, row);
    },
  });
}
