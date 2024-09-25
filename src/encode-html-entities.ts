import { showToast, Clipboard, getSelectedText, Toast } from "@raycast/api";
import he from "he";
export default async function main() {
  try {
		const selectedText = await getSelectedText();
		const transformedText = he.encode(selectedText);
		await Clipboard.paste(transformedText);
	} catch (error) {
		await showToast({
			style: Toast.Style.Failure,
			title: "Cannot transform text",
			message: String(error),
		});
	}
}
