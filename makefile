deploy-local:
	npm run build-prod

deploy-www: deploy-local
	del /s/q \\litnas\shared\websites\litskevich.ru && \
	xcopy .\dist\litskevich.ru "\\litnas\shared\websites\litskevich.ru" /E/H/Y/F
