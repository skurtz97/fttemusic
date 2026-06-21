import fs from 'fs';
import path from 'path';

const songsDir = path.join(process.cwd(), 'src/routes/songs');
const contentDir = path.join(process.cwd(), 'src/content/songs');

// Ensure content directory exists
if (!fs.existsSync(contentDir)) {
	fs.mkdirSync(contentDir, { recursive: true });
}

// Find all .svx files in songs directory
const files = fs
	.readdirSync(songsDir, { withFileTypes: true })
	.filter((dirent) => dirent.isDirectory())
	.map((dirent) => dirent.name);

files.forEach((songDir) => {
	const sourceFile = path.join(songsDir, songDir, '+page.svx');
	const targetDir = path.join(songsDir, songDir);
	const targetFile = path.join(targetDir, '+page.svx');

	// Ensure the directory exists
	if (!fs.existsSync(targetDir)) {
		fs.mkdirSync(targetDir, { recursive: true });
	}

	// Copy the file if it exists
	if (fs.existsSync(sourceFile)) {
		fs.copyFileSync(sourceFile, targetFile);
		console.log(`Generated: ${targetFile}`);
	}
});

console.log('Song pages generated successfully!');
