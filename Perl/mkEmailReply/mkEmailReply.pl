$subject = 0;
$to = 0;
$from = 0;
$date = 0;
$receiverName = 0;
@messageLines = ();

while($line = <>) {
	if($line =~ m/^\s*$/) {
		last; # Stop processing within this while loop, continue below
	}

	if($line =~ m/^Subject: (.*)$/i) {
		$subject = "Re: $1";
	}

	if($line =~ m/^Reply-to: (.*)$/i) {
		$to = $1;
	}

	if($line =~ m/^To: ([^\(]*) (\((.*)\))$/i) {
		$from = "$1 $2";
		$receiverName = $3;
	}

	if($line =~ m/^Date: (\w+,? \w+ \d+ \d+ \d{1,2}:\d{1,2}.*)$/i) {
		$date = $1;
	}
}

while($line = <>) {
	if($line =~ m/^\s*$/) { last; };
	push(@messageLines, "|> $line");
}

printf("To: %s\n", $to);
printf("From: %s\n", $from);
printf("Subject: %s\n", $subject);
printf("\n");
printf("On %s %s wrote\n", $date, $receiverName);
for($i = 0; $i < scalar @messageLines; $i++) {
	printf("%s", @messageLines[$i]);
}

