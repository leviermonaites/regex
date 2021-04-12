$stockPrice = @ARGV[0];

printf("%s\n", $stockPrice);
$stockPrice =~ s/(\.\d\d[1-9]?)\d*/$1/;
printf("%s\n", $stockPrice);
