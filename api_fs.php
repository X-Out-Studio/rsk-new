<?php

$dir = './uploads';

$request = json_decode(file_get_contents('php://input'), true);
header('Content-type: application/json');


function scanAllDir($dir) {
    $result = [];

    foreach(scandir($dir) as $key => $filename) {

        if ($filename[0] === '.') continue;

        $filePath = $dir . '/' . $filename;

        if (is_dir($filePath)) {
            foreach (scanAllDir($filePath) as $childFilename) {
                $result[$key]['folder_date'] = $filename;

                $filteredDate = preg_split('/[\s,()]+/', $childFilename);

                $result[$key]['full_date'] = str_replace(['.jpg', '.jpeg', '.png'], '', $filteredDate[0]);
                $result[$key]['photo'][] = $childFilename;
            }
        } else {
            $result[$key] = $filename;
        }
    }
    return array_values($result);
}


function getArchives($dir)
{
    $files2 = array_values(array_diff(scandir($dir), array('..', '.')));

    return json_encode($files2, JSON_UNESCAPED_UNICODE);
}

function getPhotosWithDate($dir, $year)
{
    return json_encode(scanAllDir($dir . '/' . $year));
}

switch ($request['action']) {
    case 'getArchives':
        echo getArchives($dir);
        break;
    case 'getPhotosWithDate':
        echo getPhotosWithDate($dir, $request['year']);
        break;
    default:
        echo 'Unsupported action';
}

exit();
