import bcrypt from "bcrypt";

export async function EncryptPassword({ password }: { password: string }) {
	const passwordEncripted = await bcrypt.hash(password, 12);

	return passwordEncripted;
}

export async function decodePassword({
	password,
	passwordEncripted,
}: { password: string; passwordEncripted: string }) {
	const passwordDecode = await bcrypt.compare(password, passwordEncripted);

	return passwordDecode;
}
