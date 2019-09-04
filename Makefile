
google-ads-blocker.zip:
	@cd src && zip -r -FS ../google-ads-blocker.zip *

clean:
	@rm -f google-ads-blocker.zip

build: clean google-ads-blocker.zip